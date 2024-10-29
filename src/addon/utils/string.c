#include "../include/utils.h"
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

/** Trim Start Function */
napi_value TrimStart(napi_env env, napi_callback_info info) {
    napi_value input;
    size_t argc = 1;
    napi_get_cb_info(env, info, &argc, &input, NULL, NULL);

    size_t strLength;
    napi_get_value_string_utf8(env, input, NULL, 0, &strLength);
    char *str = malloc(strLength + 1);
    napi_get_value_string_utf8(env, input, str, strLength + 1, NULL);

    char *start = str;
    while (isspace((unsigned char)*start)) {
        start++;
    }

    napi_value result;
    napi_create_string_utf8(env, start, strLength - (start - str), &result);
    free(str);
    return result;
}

/** Trim End Function */
napi_value TrimEnd(napi_env env, napi_callback_info info) {
    napi_value input;
    size_t argc = 1;
    napi_get_cb_info(env, info, &argc, &input, NULL, NULL);

    size_t strLength;
    napi_get_value_string_utf8(env, input, NULL, 0, &strLength);
    char *str = malloc(strLength + 1);
    napi_get_value_string_utf8(env, input, str, strLength + 1, NULL);

    char *end = str + strLength - 1;
    while (end >= str && isspace((unsigned char)*end)) {
        end--;
    }

    napi_value result;
    napi_create_string_utf8(env, str, end - str + 1, &result);
    free(str);
    return result;
}

/** Function to check string is empty or not */
napi_value IsEmpty(napi_env env, napi_callback_info info) {
    napi_value input;
    size_t argc = 1;
    napi_get_cb_info(env, info, &argc, &input, NULL, NULL);

    size_t strLength;
    napi_get_value_string_utf8(env, input, NULL, 0, &strLength);

    napi_value result;
    napi_get_boolean(env, strLength == 0, &result);
    return result;
}