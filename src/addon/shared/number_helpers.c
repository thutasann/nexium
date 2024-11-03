#include "../include/number_helpers.h"
#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

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

/** Helper function to generate a random integer between min and max */
int generateRandom(int min, int max) {
    return min + rand() % (max - min + 1);
}

/** Helper function to generate ordinal suffix @private */
const char *getOrdinalSuffix(int number) {
    int lastTwoDigits = number % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return "th";
    }

    int lastDigit = number % 10;
    switch (lastDigit) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
    }
}

/** Helper function to generate ordinal string */
char *convertToOrdinal(int number) {
    const char *suffix = getOrdinalSuffix(number);

    size_t bufferSize = snprintf(NULL, 0, "%d%s", number, suffix) + 1;
    char *result = malloc(bufferSize);
    snprintf(result, bufferSize, "%d%s", number, suffix);

    return result;
}
