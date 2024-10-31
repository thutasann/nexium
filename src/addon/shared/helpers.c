#include <ctype.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Helper function to check if a string a palindrome
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

// Helper function to convert two hex characters to a byte
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