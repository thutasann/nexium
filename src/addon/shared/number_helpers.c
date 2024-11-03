#include "../include/number_helpers.h"
#include <math.h>
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

/** Helper function for roundTo */
double roundTo(double number, int decimalPlaces) {
    double multiplier = pow(10.0, decimalPlaces);
    return round((number + 1e-9) * multiplier) / multiplier;
}
