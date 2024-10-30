#include "../include/utils.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

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
