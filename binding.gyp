{
  "targets": [
    {
      "target_name": "nexium",
      "sources": [
        "src/addon/addon.c",
        "src/addon/utils/math.c",
        "src/addon/utils/string.c",
        "src/addon/utils/uuid.c",
        "src/addon/shared/helpers.c",
      ],
      "include_dirs": [
        "<!@(node -e \"require('node-addon-api').include\")"
      ],
      "cflags!": [ "-fno-exceptions" ],
      "cflags!": [ "-Wno-implicit-fallthrough" ],
      "cflags": [
        "-std=c11",
        "-O3",
        "-ffunction-sections",
        "-fdata-sections"
      ],
      "ldflags": [
        "-Wl,--gc-sections",
        "-s"
      ]
    }
  ]
}