#ifndef NUMBER_HELPERS
#define NUMBER_HELPERS

#include <stdbool.h>

int clamp(int number, int min, int max);
bool inRange(int number, int start, int end);
double roundTo(double number, int decimalPlaces);
int generateRandom(int min, int max);
char *convertToOrdinal(int number);

#endif