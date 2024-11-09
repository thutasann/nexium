#include "../include/leetcode_helpers.h"
#include <stdbool.h>
#include <stdlib.h>

/** Helper function for Two Sum */
int *two_sum(int *numbers, int length, int target) {
    int *result = (int *)malloc(2 * sizeof(int));
    if (!result)
        return NULL;

    for (int i = 0; i < length - 1; i++) {
        for (int j = i + 1; j < length; j++) {
            if (numbers[i] + numbers[j] == target) {
                result[0] = i;
                result[j] = j;
                return result;
            }
        }
    }

    free(result);
    return NULL;
}

/** helper function for `Longest substring without repeating characters` */
int longest_substring(const char *str) {
    int last_seen[256]; // ASCII character set, initialized to -1 for each position
    for (int i = 0; i < 256; i++) {
        last_seen[i] = -1;
    }

    int max_len = 0;
    int start = 0;

    for (int i = 0; str[i] != '\0'; i++) {
        unsigned char ch = (unsigned char)str[i]; // Ensure index is within bounds of ASCII

        // Update the start of the window if we encounter a repeated character
        if (last_seen[ch] >= start) {
            start = last_seen[ch] + 1;
        }

        // Update the last seen position of the character
        last_seen[ch] = i;

        // Update the maximum length of the substring
        int current_len = i - start + 1;
        if (current_len > max_len) {
            max_len = current_len;
        }
    }
    return max_len;
}