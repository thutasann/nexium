#include "../include/leetcode_helpers.h"
#include <limits.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

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

/** Helper stack function for is valid parentheses */
bool is_valid_parentheses(const char *s) {
    int n = strlen(s);
    char *stack = (char *)malloc(n * sizeof(char)); // allocate stack
    if (!stack)
        return false;

    int top = -1;

    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];

        // push opening brackets onto the stack
        if (c == '(' || c == '{' || c == '[') {
            stack[++top] = c;
        }

        // check for matching closing brackets
        else if ((c == ')' && top >= 0 && stack[top] == '(') ||
                 (c == '}' && top >= 0 && stack[top] == '{') ||
                 (c == ']' && top >= 0 && stack[top] == '[')) {
            top--; // Pop the matching opening bracket
        } else {
            free(stack);
            return false;
        }
    }

    bool result = top == -1; // if stack is empty, parentheses are valid;
    free(stack);
    return result;
}

/** Helper function for checking if given two strings are anagram */
bool is_valid_anagram(const char *s1, const char *s2) {
    int len1 = strlen(s1);
    int len2 = strlen(s2);

    if (len1 != len2)
        return false;

    // frequency array for ASCII characters
    int char_count[256] = {0};

    // count characters in the first string
    for (int i = 0; i < len1; i++) {
        char_count[(unsigned char)s1[i]]++;
    }

    // subtract character counts using the second string
    for (int i = 0; i < len2; i++) {
        char_count[(unsigned char)s2[i]]--;
        if (char_count[(unsigned char)s2[i]] < 0) {
            return false;
        }
    }

    return true;
}

/** Helper function to reverse integer */
int reverse_integer(int x) {
    int reversed = 0;
    while (x != 0) {
        int pop = x % 10;
        x /= 10;

        // Check for overflow/underflow before multiplying and adding
        if (reversed > INT_MAX / 10 || (reversed == INT_MAX / 10 && pop > 7)) {
            return 0; // Overflow
        }
        if (reversed < INT_MIN / 10 || (reversed == INT_MIN / 10 && pop < -8)) {
            return 0; // Underflow
        }

        reversed = reversed * 10 + pop;
    }
    return reversed;
}

/** Helper function to check integer is palindrome or not */
bool is_int_palindrome(int x) {
    if (x < 0)
        return false;
    if (x != 0 && x % 10 == 0)
        return false;

    int reversed = 0;
    int original = x;

    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x /= 10;
    }

    return original == reversed;
}

/** Helper function to sort by frequency in descending order */
int compare_frequent(const void *a, const void *b) {
    return ((FrequencyMap *)b)->frequency - ((FrequencyMap *)a)->frequency;
}

/* Helper function to find the K Most frequent elements*/
int *KMostFrequent_Helper(int *array, int size, int k, int *returnSize) {
    FrequencyMap *hashmap = (FrequencyMap *)malloc(size * sizeof(FrequencyMap));
    int mapSize = 0;

    // build frequency map
    for (int i = 0; i < size; i++) {
        int found = 0;
        for (int j = 0; j < mapSize; j++) {
            if (hashmap[j].element == array[i]) {
                hashmap[j].frequency++;
                found = 1;
                break;
            }
        }
        if (!found) {
            hashmap[mapSize].element = array[i];
            hashmap[mapSize].frequency = 1;
            mapSize++;
        }
    }

    // sort the frequency map by frequency in decending order
    qsort(hashmap, mapSize, sizeof(FrequencyMap), compare_frequent);

    // allocation memory for the result arry
    int *result = (int *)malloc(k * sizeof(int));
    *returnSize = k;

    // extract the top k elements
    for (int i = 0; i < k; i++) {
        result[i] = hashmap[i].element;
    }

    free(hashmap);

    return result;
}