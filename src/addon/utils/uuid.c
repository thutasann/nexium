#include "../include/utils.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

// ---------- Helpers
uint8_t hex_to_byte(char high, char low);

/** Function to Generate UUID */
napi_value GenerateUUID(napi_env env, napi_callback_info info) {
    char uuid[37]; // 36 characters + 1 null terminator

    // Randomly generate UUID
    srand((unsigned int)time(NULL));
    snprintf(
        uuid, sizeof(uuid),
        "%08x-%04x-%04x-%04x-%012x",
        rand() & 0xffffffff,
        rand() & 0xffff,
        (rand() & 0x0fff) | 0x4000, // UUID version 4
        (rand() & 0x3fff) | 0x8000, // UUID variant 1
        rand() & 0xffffffffffff);

    // Convert to lowercase
    for (int i = 0; i < 36; i++) {
        uuid[i] = (char)tolower(uuid[i]);
    }

    napi_value result;
    napi_create_string_utf8(env, uuid, NAPI_AUTO_LENGTH, &result);
    return result;
}

/** Parse Function to convert UUID string to array of bytes */
napi_value ParseUUID(napi_env env, napi_callback_info info) {
    napi_value input;
    size_t argc = 1;
    napi_get_cb_info(env, info, &argc, &input, NULL, NULL);

    // Retrieve UUID string
    size_t str_length;
    napi_get_value_string_utf8(env, input, NULL, 0, &str_length);
    if (str_length != 36) {
        napi_throw_error(env, NULL, "Invalid UUID length");
        return NULL;
    }

    char uuid_str[37];
    napi_get_value_string_utf8(env, input, uuid_str, sizeof(uuid_str), NULL);

    // Array to store bytes
    uint8_t bytes[16];
    int byte_index = 0;

    for (int i = 0; i < 36; i++) {
        if (uuid_str[i] == '-')
            continue;

        if (i % 2 == 0) {
            // Convert two hex characters to a byte
            bytes[byte_index++] = hex_to_byte(uuid_str[i], uuid_str[i + 1]);
        }
    }

    // Create result array in JavaScript
    napi_value result;
    napi_create_array(env, &result);

    for (int i = 0; i < 16; i++) {
        napi_value byte;
        napi_create_uint32(env, bytes[i], &byte);
        napi_set_element(env, result, i, byte);
    }

    return result;
}

/** Function to validate if a string is a UUID */
napi_value IsValidUUID(napi_env env, napi_callback_info info) {
    napi_value input;
    size_t argc = 1;
    napi_get_cb_info(env, info, &argc, &input, NULL, NULL);

    // get uuid string
    size_t str_length;
    napi_get_value_string_utf8(env, input, NULL, 0, &str_length);

    // uuids are 36 characters long (32 hex + 4 dashes)
    if (str_length != 36) {
        napi_value result;
        napi_get_boolean(env, false, &result);
        return result;
    }

    char uuid_str[37];
    napi_get_value_string_utf8(env, input, uuid_str, sizeof(uuid_str), NULL);

    // Check format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    for (int i = 0; i < 36; i++) {
        if ((i == 8 || i == 13 || i == 18 || i == 23) && uuid_str[i] != '-') {
            napi_value result;
            napi_get_boolean(env, false, &result);
            return result;
        } else if (i != 8 && i != 13 && i != 18 && i != 23) {
            if (!isxdigit(uuid_str[i])) { // Check if character is hex
                napi_value result;
                napi_get_boolean(env, false, &result);
                return result;
            }
        }
    }

    napi_value result;
    napi_get_boolean(env, true, &result);
    return result;
}

/* Function to convert an array of 16 bytes to UUID string format */
napi_value BytesToUUID(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // Check if input is an array of exactly 16 bytes
    bool isArray;
    napi_is_array(env, args[0], &isArray);
    if (!isArray)
        return NULL;

    uint32_t arrayLength;
    napi_get_array_length(env, args[0], &arrayLength);
    if (arrayLength != 16)
        return NULL;

    // Retrieve bytes from the array
    unsigned char bytes[16];
    for (uint32_t i = 0; i < arrayLength; i++) {
        napi_value byte;
        napi_get_element(env, args[0], i, &byte);

        int32_t value;
        napi_get_value_int32(env, byte, &value);
        bytes[i] = (unsigned char)value;
    }

    // Format bytes into UUID string
    char uuid_str[37];
    snprintf(uuid_str, sizeof(uuid_str),
             "%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x-%02x%02x%02x%02x%02x%02x",
             bytes[0], bytes[1], bytes[2], bytes[3], bytes[4], bytes[5], bytes[6],
             bytes[7], bytes[8], bytes[9], bytes[10], bytes[11], bytes[12],
             bytes[13], bytes[14], bytes[15]);

    // Create N-API string result
    napi_value result;
    napi_create_string_utf8(env, uuid_str, NAPI_AUTO_LENGTH, &result);
    return result;
}