const route = {
  number: 1,
  times: {
    start: "2022-09-05T12:07:00",
    end: "2022-09-05T12:58:00",
    durations: {
      total: 51,
      walking: 7,
      waiting: 16,
      riding: 28,
    },
  },
  segments: [
    {
      type: "walk",
      times: {
        start: "2022-09-05T12:07:00",
        end: "2022-09-05T12:12:00",
        durations: {
          total: 5,
          walking: 5,
        },
      },
      from: {
        origin: {
          point: {
            centre: {
              utm: {
                zone: "14U",
                x: 633135,
                y: 5517583,
              },
              geographic: {
                latitude: "49.79593",
                longitude: "-97.15008",
              },
            },
          },
        },
      },
      bounds: {
        maximum: {
          lat: "49.79627",
          lng: "-97.14676",
        },
        minimum: {
          lat: "49.79557",
          lng: "-97.15042",
        },
      },
      to: {
        stop: {
          key: 60074,
          name: "Northbound Dalhousie at Silverstone",
          centre: {
            utm: {
              zone: "14U",
              x: 633373,
              y: 5517622,
            },
            geographic: {
              latitude: "49.79622",
              longitude: "-97.14676",
            },
          },
        },
      },
    },
    {
      type: "ride",
      times: {
        start: "2022-09-05T12:12:00",
        end: "2022-09-05T12:20:00",
        durations: {
          total: 8,
          riding: 8,
        },
      },
      route: {
        key: 662,
        number: 662,
        name: "Route 662 Richmond",
        "customer-type": "regular",
        coverage: "feeder",
        "badge-label": 662,
        "badge-style": {
          "class-names": {
            "class-name": ["badge-label", "feeder"],
          },
          "background-color": "#ffffff",
          "border-color": "#d9d9d9",
          color: "#000000",
        },
      },
      variant: {
        key: "662-0-U",
        name: "Richmond to University of Manitoba via Richmond West",
      },
      bounds: {
        maximum: {
          lat: "49.80867",
          lng: "-97.13077",
        },
        minimum: {
          lat: "49.79619",
          lng: "-97.14692",
        },
      },
      bus: {
        key: 358,
        "bike-rack": "false",
        wifi: "false",
      },
    },
    {
      type: "transfer",
      times: {
        start: "2022-09-05T12:20:00",
        end: "2022-09-05T12:37:00",
        durations: {
          total: 17,
          walking: 1,
          waiting: 16,
        },
      },
      from: {
        stop: {
          key: 61254,
          name: "Eastbound Dafoe at U of M Station",
          centre: {
            utm: {
              zone: "14U",
              x: 634493,
              y: 5519026,
            },
            geographic: {
              latitude: "49.8086",
              longitude: "-97.13072",
            },
          },
        },
      },
      bounds: {
        maximum: {
          lat: "49.80899",
          lng: "-97.12998",
        },
        minimum: {
          lat: "49.8086",
          lng: "-97.13078",
        },
      },
      to: {
        stop: {
          key: 60673,
          name: "Westbound Dafoe at U of M Station (74, 75, 78)",
          centre: {
            utm: {
              zone: "14U",
              x: 634542,
              y: 5519071,
            },
            geographic: {
              latitude: "49.80899",
              longitude: "-97.13002",
            },
          },
        },
      },
    },
    {
      type: "ride",
      times: {
        start: "2022-09-05T12:37:00",
        end: "2022-09-05T12:57:00",
        durations: {
          total: 20,
          riding: 20,
        },
      },
      route: {
        key: 74,
        number: 74,
        name: "Route 74 Kenaston",
        "customer-type": "regular",
        coverage: "regular",
        "badge-label": 74,
        "badge-style": {
          "class-names": {
            "class-name": ["badge-label", "regular"],
          },
          "background-color": "#ffffff",
          "border-color": "#d9d9d9",
          color: "#000000",
        },
      },
      variant: {
        key: "74-1-P",
        name: "Kenaston to Polo Park",
      },
      bounds: {
        maximum: {
          lat: "49.81827",
          lng: "-97.12998",
        },
        minimum: {
          lat: "49.8015",
          lng: "-97.19179",
        },
      },
      bus: {
        key: 129,
        "bike-rack": "false",
        wifi: "false",
      },
    },
    {
      type: "walk",
      times: {
        start: "2022-09-05T12:57:00",
        end: "2022-09-05T12:58:00",
        durations: {
          total: 1,
          walking: 1,
        },
      },
      from: {
        stop: {
          key: 60712,
          name: "Northbound Henlow at Scurfield South",
          centre: {
            utm: {
              zone: "14U",
              x: 630087,
              y: 5519667,
            },
            geographic: {
              latitude: "49.81533",
              longitude: "-97.19171",
            },
          },
        },
      },
      bounds: {
        maximum: {
          lat: "49.81533",
          lng: "-97.19167",
        },
        minimum: {
          lat: "49.81517",
          lng: "-97.19179",
        },
      },
      to: {
        destination: {
          point: {
            centre: {
              utm: {
                zone: "14U",
                x: 630090,
                y: 5519650,
              },
              geographic: {
                latitude: "49.81518",
                longitude: "-97.19167",
              },
            },
          },
        },
      },
    },
  ],
};
