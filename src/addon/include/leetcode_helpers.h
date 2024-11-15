#ifndef LEETCODE_HELPERS_H
#define LEETCODE_HELPERS_H

#include <stdbool.h>

int *two_sum(int *numbers, int length, int target);
int longest_substring(const char *str);
bool is_valid_parentheses(const char *s);
bool is_valid_anagram(const char *s1, const char *s2);
int reverse_integer(int x);
bool is_int_palindrome(int x);

/** Hashmap structure to store elements and their frequencies */
typedef struct {
    int element;
    int frequency;
} FrequencyMap;
int compare_frequent(const void *a, const void *b);
int *KMostFrequent_Helper(int *array, int size, int k, int *returnSize);

#endif
