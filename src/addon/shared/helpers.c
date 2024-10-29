#include <stdbool.h>
#include <stdio.h>
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
