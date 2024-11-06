#include "../include/array_helpers.h"
#include <stdbool.h>
#include <stdlib.h>

/** helper function for bubble_sort */
void bubble_sort(int *arr, size_t length) {
    if (length <= 1)
        return;

    size_t lastSwap, newSwap;
    for (size_t end = length - 1; end > 0; end = lastSwap) {
        lastSwap = 0;
        for (size_t j = 0; j < end; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                lastSwap = j;
            }
        }
        if (lastSwap == 0)
            break;
    }
}