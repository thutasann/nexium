#include "../include/utils.h"
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

// ---------- Helpers
bool is_palindrome(const char *str, size_t length);
char **getWordArray(const char *input, int *word_count);
void slugify_helper(const char *input, char *output, int to_lowercase);
void camel_to_snake(const char *input, char *output);
void snake_to_camel(const char *input, char *output);
bool ends_with(const char *str, const char *target);
void to_kebab_case(const char *input, char *output);

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

/* Function to insert string at a specified index */
napi_value InsertStringAt(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // Get input string
    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);
    char str[str_len + 1];
    napi_get_value_string_utf8(env, args[0], str, str_len + 1, NULL);

    // Get substring to insert
    size_t substr_len;
    napi_get_value_string_utf8(env, args[1], NULL, 0, &substr_len);
    char substr[substr_len + 1];
    napi_get_value_string_utf8(env, args[1], substr, substr_len + 1, NULL);

    // Get index
    int32_t index;
    napi_get_value_int32(env, args[2], &index);

    // Handle out-of-bounds index
    if (index < 0)
        index = 0;
    if (index > str_len)
        index = str_len;

    // Calculate new string length and create result string
    size_t new_len = str_len + substr_len;
    char result[new_len + 1];

    // Copy parts into result using strncpy for length safety
    strncpy(result, str, index);                                        // Copy up to the index
    strncpy(result + index, substr, substr_len);                        // Copy the substring
    strncpy(result + index + substr_len, str + index, str_len - index); // Copy remainder of the original string

    result[new_len] = '\0'; // Null-terminate

    napi_value output;
    napi_create_string_utf8(env, result, new_len, &output);
    return output;
}

/** Function to get words array from a given string */
napi_value GetWordsArray(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);
    char *input = (char *)malloc(str_len + 1);
    napi_get_value_string_utf8(env, args[0], input, str_len + 1, NULL);

    int word_count;
    char **words = getWordArray(input, &word_count);

    napi_value result;
    napi_create_array_with_length(env, word_count, &result);

    for (int i = 0; i < word_count; i++) {
        napi_value word;
        napi_create_string_utf8(env, words[i], NAPI_AUTO_LENGTH, &word);
        napi_set_element(env, result, i, word);
        free(words[i]);
    }

    free(words);
    free(input);
    return result;
}

/** Function to slugify a string */
napi_value Slugify(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);
    char *input = (char *)malloc(str_len + 1);
    napi_get_value_string_utf8(env, args[0], input, str_len + 1, NULL);

    bool to_lowercase;
    napi_get_value_bool(env, args[1], &to_lowercase);

    char *output = (char *)malloc(str_len * 2 + 1); // Allocating enough space for worst case

    slugify_helper(input, output, to_lowercase);

    napi_value result;
    napi_create_string_utf8(env, output, NAPI_AUTO_LENGTH, &result);

    free(input);
    free(output);
    return result;
}

/** Function to convert CamelCase to snake_case */
napi_value CamelToSnake(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);
    char *input = (char *)malloc(str_len + 1);
    napi_get_value_string_utf8(env, args[0], input, str_len + 1, NULL);

    // allocate enough space
    char *output = (char *)malloc(str_len * 2 + 1);
    camel_to_snake(input, output);

    napi_value result;
    napi_create_string_utf8(env, output, NAPI_AUTO_LENGTH, &result);

    free(input);
    free(output);
    return result;
}

/** Function to convert snake_case to CamelCase */
napi_value SnakeToCamel(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);
    char *input = (char *)malloc(str_len + 1);
    napi_get_value_string_utf8(env, args[0], input, str_len + 1, NULL);

    char *output = (char *)malloc(str_len + 1); // Allocate enough space
    snake_to_camel(input, output);

    napi_value result;
    napi_create_string_utf8(env, output, NAPI_AUTO_LENGTH, &result);

    free(input);
    free(output);
    return result;
}

/** Function to convert a string to kebab-case */
napi_value ToKebabCase(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);

    char *input = (char *)malloc(str_len + 1);
    napi_get_value_string_utf8(env, args[0], input, str_len + 1, NULL);

    char *output = (char *)malloc((str_len * 2) + 1); // allocate enough space for output
    to_kebab_case(input, output);

    napi_value napi_result;
    napi_create_string_utf8(env, output, NAPI_AUTO_LENGTH, &napi_result);

    free(input);
    free(output);

    return napi_result;
}

/** Function to check if the string ends with the target string */
napi_value EndsWith(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    size_t str_len, target_len;
    napi_get_value_string_utf8(env, args[0], NULL, 0, &str_len);
    napi_get_value_string_utf8(env, args[1], NULL, 0, &target_len);

    char *str = (char *)malloc(str_len + 1);
    char *target = (char *)malloc(target_len + 1);

    napi_get_value_string_utf8(env, args[0], str, str_len + 1, NULL);
    napi_get_value_string_utf8(env, args[1], target, target_len + 1, NULL);

    bool result = ends_with(str, target);

    napi_value output_result;
    napi_get_boolean(env, result, &output_result);

    free(str);
    free(target);

    return output_result;
}