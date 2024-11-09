#include "../include/leetcode_helpers.h"
#include "../include/utils.h"
#include <node_api.h>
#include <stdlib.h>
#include <string.h>

/** Two Sum Function */
napi_value TwoSum(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_status status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
    if (status != napi_ok)
        return NULL;

    // Check if first argument is an array
    bool is_array;
    status = napi_is_array(env, args[0], &is_array);
    if (status != napi_ok || !is_array) {
        napi_throw_type_error(env, NULL, "Expected an array as the first argument");
        return NULL;
    }

    // Get the array length
    uint32_t length;
    status = napi_get_array_length(env, args[0], &length);
    if (status != napi_ok)
        return NULL;

    // Allocate memory for the numbers array
    int *numbers = (int *)malloc(length * sizeof(int));
    if (!numbers) {
        napi_throw_error(env, NULL, "Memory allocation failed");
        return NULL;
    }

    // Copy elements from JavaScript array to C array
    for (uint32_t i = 0; i < length; i++) {
        napi_value element;
        status = napi_get_element(env, args[0], i, &element);
        if (status != napi_ok) {
            free(numbers);
            return NULL;
        }

        int32_t value;
        status = napi_get_value_int32(env, element, &value);
        if (status != napi_ok) {
            free(numbers);
            return NULL;
        }
        numbers[i] = value;
    }

    // Get the target value
    int32_t target;
    status = napi_get_value_int32(env, args[1], &target);
    if (status != napi_ok) {
        free(numbers);
        return NULL;
    }

    // Call the two_sum function
    int *result = two_sum(numbers, length, target);
    free(numbers);

    if (!result) {
        napi_throw_error(env, NULL, "No two sum solution found");
        return NULL;
    }

    // Create the result array to return to JavaScript
    napi_value js_result;
    status = napi_create_array_with_length(env, 2, &js_result);
    if (status != napi_ok) {
        free(result);
        return NULL;
    }

    for (int i = 0; i < 2; i++) {
        napi_value num;
        status = napi_create_int32(env, result[i], &num);
        if (status != napi_ok) {
            free(result);
            return NULL;
        }
        status = napi_set_element(env, js_result, i, num);
        if (status != napi_ok) {
            free(result);
            return NULL;
        }
    }

    free(result);
    return js_result;
}

/** Longest substring without repeating characters */
napi_value LongestSubstring(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_status status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
    if (status != napi_ok)
        return NULL;

    // Check if the argument is a string
    napi_valuetype valuetype;
    status = napi_typeof(env, args[0], &valuetype);
    if (status != napi_ok || valuetype != napi_string) {
        napi_throw_type_error(env, NULL, "Expected a string as the argument");
        return NULL;
    }

    // Get the input string from the N-API value
    size_t str_len;
    status = napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);
    if (status != napi_ok)
        return NULL;

    char *str = (char *)malloc((str_len + 1) * sizeof(char));
    if (!str) {
        napi_throw_error(env, NULL, "Memory allocation failed");
        return NULL;
    }

    status = napi_get_value_string_utf8(env, args[0], str, str_len + 1, &str_len);
    if (status != napi_ok) {
        free(str);
        return NULL;
    }

    int result = longest_substring(str);
    free(str);

    napi_value js_result;
    status = napi_create_int32(env, result, &js_result);
    if (status != napi_ok)
        return NULL;

    return js_result;
}