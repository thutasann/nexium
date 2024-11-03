#include "../include/number_helpers.h"
#include <locale.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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

/** Helper function to convert number to currency string */
char *formatCurrency(double amount, const char *locale, const char *currency) {
    // Set the locale for currency formatting
    if (setlocale(LC_ALL, locale) == NULL) {
        perror("Locale not supported\n");
        return NULL; // Return NULL on failure
    }

    // Allocate a buffer for the formatted currency string
    char *buffer = (char *)malloc(100 * sizeof(char));
    if (!buffer) {
        return NULL; // Return NULL on allocation failure
    }

    // Round the amount to two decimal places
    amount = round(amount * 100) / 100;

    // Create a format string for the currency amount
    // Using "%'f" to include the locale-specific thousands separator
    snprintf(buffer, 100, "%'.2f", amount);

    // Allocate a result buffer for final formatted string
    char *result = (char *)malloc(150 * sizeof(char)); // Increased size for currency symbols and formatting
    if (!result) {
        free(buffer);
        return NULL; // Return NULL on allocation failure
    }

    // Use snprintf to create the final formatted currency string
    snprintf(result, 150, "%s%s", currency, buffer); // Append the currency symbol

    // Free the buffer and return the result
    free(buffer);
    return result;
}