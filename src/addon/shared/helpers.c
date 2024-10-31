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