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