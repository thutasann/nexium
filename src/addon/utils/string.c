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

/** Function to check occurrences of a word from a string */
napi_value CountOccurrences(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // Get the input string
    size_t str_length;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_length);
    char *input_str = (char *)malloc(str_length + 1);
    napi_get_value_string_utf8(env, args[0], input_str, str_length + 1, NULL);

    // Get the word to search
    size_t word_length;
    napi_get_value_string_utf8(env, args[1], NULL, 0, &word_length);
    char *word = (char *)malloc(word_length + 1);
    napi_get_value_string_utf8(env, args[1], word, word_length + 1, NULL);

    int count = 0;
    char *ptr = input_str;

    while ((ptr = strstr(ptr, word)) != NULL) {
        count++;
        ptr += word_length;
    }

    free(input_str);
    free(word);

    napi_value result;
    napi_create_int32(env, count, &result);
    return result;
}

/** Function to reverse string */
napi_value ReverseString(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);

    char str[str_len + 1];
    napi_get_value_string_utf8(env, args[0], str, str_len + 1, NULL);

    for (size_t i = 0; i < str_len / 2; i++) {
        char temp = str[i];
        str[i] = str[str_len - 1 - i];
        str[str_len - 1 - i] = temp;
    }

    napi_value result;
    napi_create_string_utf8(env, str, str_len, &result);
    return result;
}

/** Function to strip HTML Tags */
napi_value StripHTMLTags(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);

    char input[str_len + 1];
    napi_get_value_string_utf8(env, args[0], input, str_len + 1, NULL);

    char result[str_len + 1];
    size_t res_index = 0;
    bool in_tag = false;

    for (size_t i = 0; i < str_len; i++) {
        if (input[i] == '<') {
            in_tag = true;
        } else if (input[i] == '>') {
            in_tag = false;
        } else if (!in_tag) {
            result[res_index++] = input[i];
        }
    }

    result[res_index] = '\0';

    napi_value output_result;
    napi_create_string_utf8(env, result, res_index, &output_result);
    return output_result;
}

/** Remove Duplicated characters from a string  */
napi_value RemoveDuplicates(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);

    char input[str_len + 1];
    napi_get_value_string_utf8(env, args[0], input, str_len + 1, NULL);

    bool seen[256] = {false};
    char result[str_len + 1];
    size_t res_index = 0;

    for (size_t i = 0; i < str_len; i++) {
        if (!seen[(unsigned char)input[i]]) {
            seen[(unsigned char)input[i]] = true;
            result[res_index++] = input[i];
        }
    }

    result[res_index] = '\0';

    napi_value output_result;
    napi_create_string_utf8(env, result, res_index, &output_result);
    return output_result;
}