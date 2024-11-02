#include "../include/number_helpers.h"
#include <ctype.h>
#include <stdint.h>
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
