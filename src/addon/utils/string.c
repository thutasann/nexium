#include "../include/utils.h"
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

// ---------- Helpers
bool is_palindrome(const char *str, size_t length);

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

/** Function to convert to Title Case */
napi_value ToTitleCase(napi_env env, napi_callback_info info) {
    napi_value input;
    size_t argc = 1;
    napi_get_cb_info(env, info, &argc, &input, NULL, NULL);

    size_t strLength;
    napi_get_value_string_utf8(env, input, NULL, 0, &strLength);
    char *str = malloc(strLength + 1);
    napi_get_value_string_utf8(env, input, str, strLength + 1, NULL);

    for (size_t i = 0; i < strLength; i++) {
        if (i == 0 || str[i - 1] == ' ') {
            str[i] = toupper((unsigned char)str[i]);
        }
    }

    napi_value result;
    napi_create_string_utf8(env, str, strLength, &result);
    free(str);
    return result;
}

/** Function to check if the string is a palindrome */
napi_value IsPalindrome(napi_env env, napi_callback_info info) {
    napi_status status;

    // Get the input string
    size_t argc = 1;
    napi_value input;
    status = napi_get_cb_info(env, info, &argc, &input, NULL, NULL);
    if (status != napi_ok)
        return NULL;

    // Get the length of the string
    size_t strLength;
    status = napi_get_value_string_utf8(env, input, NULL, 0, &strLength);
    if (status != napi_ok)
        return NULL;

    // If String is empty, return true
    if (strLength == 0) {
        napi_value result;
        napi_get_boolean(env, true, &result);
        return result;
    }

    // Allocate memory to hold the string
    char *str = (char *)malloc(strLength + 1);
    if (str == NULL)
        return NULL;

    // Get the actual string value
    status = napi_get_value_string_utf8(env, input, str, strLength + 1, &strLength);
    if (status != napi_ok) {
        free(str);
        return NULL;
    }

    // Check if the string is a palindrome
    bool palindrome = is_palindrome(str, strLength);
    free(str);

    // Create a boolean return value
    napi_value result;
    status = napi_get_boolean(env, palindrome, &result);
    if (status != napi_ok)
        return NULL;

    return result;
}