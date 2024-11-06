#include "../include/array_helpers.h"
#include <stdbool.h>
#include <stdlib.h>

/** helper function for bubble_sort */
void bubble_sort(int *arr, size_t length) {

    if (length <= 1)
        return;

    bool swapped;
    for (size_t i = 0; i < length - 1; i++) {
        swapped = false;
        for (size_t j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
}