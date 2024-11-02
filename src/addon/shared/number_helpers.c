#include "../include/number_helpers.h"
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

/** Helper function for clamp */
int clamp(int number, int min, int max) {
    if (number < min) {
        return min;
    } else if (number > max) {
        return max;
    } else {
        return number;
    }
}

/** Helper function for inRange */
bool inRange(int number, int start, int end) {
    if (start > end) {
        int temp = start;
        start = end;
        end = temp;
    }
    return (number >= start && number <= end);
}