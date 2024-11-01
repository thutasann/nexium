#include <ctype.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/** Helper function to check if a string a palindrome */
bool is_palindrome(const char *str, size_t length) {
    size_t start = 0;
    size_t end = length - 1;

    while (start < end) {
        if (str[start] != str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

/** Helper function to convert two hex characters to a byte */
uint8_t hex_to_byte(char high, char low) {
    high = tolower(high);
    low = tolower(low);
    return ((high <= '9' ? high - '0' : high - 'a' + 10) << 4) |
           (low <= '9' ? low - '0' : low - 'a' + 10);
}

/**
    Helper function to split a string into an array of words
    - `char **` return type represents a pointer to a pointer to a `char`
    - A pointer to a pointer to `char` represents an array of `char *` pointers, each pointing to a string
 */
char **getWordArray(const char *input, int *word_count) {
    *word_count = 0;
    int capacity = 10;
    char **words = malloc(capacity * sizeof(char *));
    if (words == NULL)
        return NULL;

    const char *start = input;
    while (*start) {
        // skipe whitespace
        while (*start && isspace(*start)) {
            start++;
        }
        if (!*start)
            break;

        const char *end = start;
        // find end of word
        while (*end && !isspace(*end)) {
            end++;
        }

        int length = end - start;
        words[*word_count] = malloc((length + 1) * sizeof(char));
        if (words[*word_count] == NULL)
            return NULL;

        strncpy(words[*word_count], start, length);
        words[*word_count][length] = '\0';
        (*word_count)++;

        // Expand capacity if needed
        if (*word_count >= capacity) {
            capacity *= 2;
            words = realloc(words, capacity * sizeof(char *));
            if (words == NULL)
                return NULL;
        }

        start = end;
    }

    return words;
}

/** Helper function to slugify a string */
void slugify_helper(const char *input, char *output, int to_lowercase) {
    int j = 0;
    for (int i = 0; input[i] != '\0'; i++) {
        if (isalnum(input[i])) {
            output[j++] = to_lowercase ? tolower(input[i]) : input[i];
        } else if (isspace(input[i]) || input[i] == '-') {
            if (j > 0 && output[j - 1] != '-') {
                output[j++] = '-';
            }
        }
    }
    // Remove trailing dash if present
    if (j > 0 && output[j - 1] == '-') {
        j--;
    }
    output[j] = '\0';
}

/** Helper function to convert CamelCase to snake_case */
void camel_to_snake(const char *input, char *output) {
    int j = 0;
    for (int i = 0; input[i] != '\0'; i++) {
        if (isupper(input[i])) {
            if (i > 0) {
                output[j++] = '_';
            }
            output[j++] = tolower(input[i]);
        } else {
            output[j++] = input[i];
        }
    }
    output[j] = '\0';
}

/** Helper function to convert snake_case to CamelCase */
void snake_to_camel(const char *input, char *output) {
    int j = 0;
    int capitalize = 0;
    for (int i = 0; input[i] != '\0'; i++) {
        if (input[i] == '_') {
            capitalize = 1;
        } else {
            output[j++] = capitalize ? toupper(input[i]) : input[i];
            capitalize = 0;
        }
    }
    output[j] = '\0';
}

/** Helper function to convert a string to kebab-case */
void to_kebab_case(const char *input, char *output) {
    int j = 0;
    for (int i = 0; input[i] != '\0'; i++) {
        if (isspace(input[i]) || input[i] == '_' || input[i] == '-') {
            if (j > 0 && output[j - 1] != '-') {
                output[j++] = '-';
            }
        } else {
            output[j++] = tolower(input[i]);
        }
    }
    // Remove trailing dash if present
    if (j > 0 && output[j - 1] == '-') {
        j--;
    }
    output[j] = '\0';
}

/** Helper function to check if a str ends with target */
bool ends_with(const char *str, const char *target) {
    size_t str_len = strlen(str);
    size_t target_len = strlen(target);

    if (target_len > str_len) {
        return false;
    }

    return strcmp(str + str_len - target_len, target) == 0;
}

/** Helper function to replace a substring with another string */
char *replace_string(const char *str, const char *pattern, const char *replacement) {
    size_t str_len = strlen(str);
    size_t pattern_len = strlen(pattern);
    size_t replacement_len = strlen(replacement);

    // Estimate the maximum size needed for the result
    size_t max_len = str_len + (replacement_len - pattern_len) * 10;
    char *result = (char *)malloc(max_len);
    if (!result)
        return NULL;

    size_t i = 0, j = 0;
    while (i < str_len) {
        // Check if the pattern matches at the current position
        if (strstr(&str[i], pattern) == &str[i]) {
            memcpy(&result[j], replacement, replacement_len);
            j += replacement_len;
            i += pattern_len;
        } else {
            result[j++] = str[i++];
        }
    }
    result[j] = '\0';
    return result;
}
