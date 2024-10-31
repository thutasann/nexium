#include "../include/utils.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

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

/** Parse FUnction to convert UUID string to array of bytes */
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