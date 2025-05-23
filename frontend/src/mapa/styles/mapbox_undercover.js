export default {
                "attribution": "<a href=\"https://www.mapbox.com/about/maps/\" target=\"_blank\">&copy; Mapbox</a> <a href=\"http://www.openstreetmap.org/about/\" target=\"_blank\">&copy; OpenStreetMap</a> <a class=\"mapbox-improve-map\" href=\"https://www.mapbox.com/map-feedback/\" target=\"_blank\">Improve this map</a>",
                "bounds": [-180, -85.0511, 180, 85.0511],
                "center": [0, 0, 0],
                "created": 1451865600000,
                "description": "",
                "filesize": 0,
                "fillzoom": 8,
                "format": "pbf",
                "id": "mapbox.mapbox-streets-v7",
                "mapbox_logo": true,
                "maxzoom": 16,
                "minzoom": 0,
                "name": "Mapbox Streets v7",
                "private": false,
                "scheme": "xyz",
                "tilejson": "2.2.0",
                "tiles": [
                    // window.____MVTMAPSERVER_URL+ "b/{z}/{x}/{y}.vector.pbf",
                    // window.____MVTMAPSERVER_URL + "a/{z}/{x}/{y}.vector.pbf",
                    // window.____MVTMAPSERVER_URL + "b/{z}/{x}/{y}.vector.pbf",
                    "https://b.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA",
                    "https://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA",
                    "https://b.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA"
                ],
                "vector_layers": [{
                    "description": "",
                    "fields": {
                        "class": "One of: agriculture, cemetery, glacier, grass, hospital, industrial, park, parking, piste, pitch, rock, sand, school, scrub, wood, aboriginal_lands",
                        "type": "OSM tag, more specific than class"
                    },
                    "id": "landuse",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "class": "One of: river, canal, stream, stream_intermittent, ditch, drain",
                        "type": "One of: river, canal, stream, ditch, drain"
                    },
                    "id": "waterway",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {},
                    "id": "water",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "type": "One of: runway, taxiway, apron"
                    },
                    "id": "aeroway",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "class": "One of: fence, hedge, cliff, gate"
                    },
                    "id": "barrier_line",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "extrude": "String. Whether building should be extruded when rendering in 3D. One of: 'true', 'false'",
                        "height": "Number. Height of building or part of building.",
                        "min_height": "Number. Height of bottom of building or part of building, if it does not start at ground level.",
                        "type": "In most cases, values will be that of the primary key from OpenStreetMap tags.",
                        "underground": "Text. Whether building is underground. One of: 'true', 'false'"
                    },
                    "id": "building",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "class": "One of: national_park, wetland, wetland_noveg",
                        "type": "OSM tag, more specific than class"
                    },
                    "id": "landuse_overlay",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "class": "One of: 'motorway', 'motorway_link', 'trunk', 'primary', 'secondary', 'tertiary', 'link', 'street', 'street_limited', 'pedestrian', 'construction', 'track', 'service', 'ferry', 'path', 'golf'",
                        "layer": "Number. Specifies z-ordering in the case of overlapping road segments. Common range is -5 to 5. Available from zoom level 13+.",
                        "oneway": "Text. Whether traffic on the road is one-way. One of: 'true', 'false'.",
                        "structure": "Text. One of: 'none', 'bridge', 'tunnel', 'ford'. Available from zoom level 13+.",
                        "type": "In most cases, values will be that of the primary key from OpenStreetMap tags."
                    },
                    "id": "road",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "admin_level": "The OSM administrative level of the boundary",
                        "disputed": "Number. Disputed boundaries are 1, all others are 0.",
                        "iso_3166_1": "The ISO 3166-1 alpha-2 code(s) of the state(s) a boundary is part of. Format: 'AA' or 'AA-BB'",
                        "maritime": "Number. Maritime boundaries are 1, all others are 0."
                    },
                    "id": "admin",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "code": "ISO 3166-1 Alpha-2 code",
                        "name": "Local name of the country",
                        "name_ar": "Arabic name of the country",
                        "name_de": "German name of the country",
                        "name_en": "English name of the country",
                        "name_es": "Spanish name of the country",
                        "name_fr": "French name of the country",
                        "name_pt": "Portuguese name of the country",
                        "name_ru": "Russian name of the country",
                        "name_zh": "Chinese name of the country",
                        "parent": "ISO 3166-1 Alpha-2 code of the administering/parent state, if any",
                        "scalerank": "Number, 1-6. Useful for styling text sizes.",
                        "type": "One of: country, territory, disputed territory, sar"
                    },
                    "id": "country_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "labelrank": "Number, 1-6. Useful for styling text sizes.",
                        "name": "Local or international name of the water body",
                        "name_ar": "Arabic name of the water body",
                        "name_de": "German name of the water body",
                        "name_en": "English name of the water body",
                        "name_es": "Spanish name of the water body",
                        "name_fr": "French name of the water body",
                        "name_pt": "Portuguese name of the water body",
                        "name_ru": "Russian name of the water body",
                        "name_zh": "Chinese name of the water body",
                        "placement": "One of: point, line"
                    },
                    "id": "marine_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "abbr": "Abbreviated state name",
                        "area": "The area of the state in kilometers²",
                        "name": "Local name of the state",
                        "name_ar": "Arabic name of the state",
                        "name_de": "German name of the state",
                        "name_en": "English name of the state",
                        "name_es": "Spanish name of the state",
                        "name_fr": "French name of the state",
                        "name_pt": "Portuguese name of the state",
                        "name_ru": "Russian name of the state",
                        "name_zh": "Chinese name of the state"
                    },
                    "id": "state_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "capital": "Admin level the city is a capital of, if any. One of: 2, 3, 4, 5, 6, null",
                        "ldir": "A hint for label placement at low zoom levels. One of: N, E, S, W, NE, SE, SW, NW, null",
                        "localrank": "Number. Priority relative to nearby places. Useful for limiting label density.",
                        "name": "Local name of the place",
                        "name_ar": "Arabic name of the place",
                        "name_de": "German name of the place",
                        "name_en": "English name of the place",
                        "name_es": "Spanish name of the place",
                        "name_fr": "French name of the place",
                        "name_pt": "Portuguese name of the place",
                        "name_ru": "Russian name of the place",
                        "name_zh": "Chinese name of the place",
                        "name_zh-Hans": "Simplified Chinese name of the place",
                        "scalerank": "Number, 0-9 or null. Useful for styling text & marker sizes.",
                        "type": "One of: city, town, village, hamlet, suburb, neighbourhood, island, islet, archipelago, residential, aboriginal_lands"
                    },
                    "id": "place_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "area": "The area of the water polygon in Mercator meters²",
                        "name": "Local name of the water body",
                        "name_ar": "Arabic name of the water body",
                        "name_de": "German name of the water body",
                        "name_en": "English name of the water body",
                        "name_es": "Spanish name of the water body",
                        "name_fr": "French name of the water body",
                        "name_pt": "Portuguese name of the water body",
                        "name_ru": "Russian name of the water body",
                        "name_zh": "Chinese name of the water body",
                        "name_zh-Hans": "Simplified Chinese name of the water body"
                    },
                    "id": "water_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "maki": "One of: airport, airfield, heliport, rocket",
                        "name": "Local name of the airport",
                        "name_ar": "Arabic name of the airport",
                        "name_de": "German name of the airport",
                        "name_en": "English name of the airport",
                        "name_es": "Spanish name of the airport",
                        "name_fr": "French name of the airport",
                        "name_pt": "Portuguese name of the airport",
                        "name_ru": "Russian name of the airport",
                        "name_zh": "Chinese name of the airport",
                        "name_zh-Hans": "Simplified Chinese name of the airport",
                        "ref": "A 3-4 character IATA, FAA, ICAO, or other reference code",
                        "scalerank": "Number 1-4. Useful for styling icon sizes."
                    },
                    "id": "airport_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "maki": "One of: rail, rail-metro, rail-light, entrance",
                        "name": "Local name of the station",
                        "name_ar": "Arabic name of the station",
                        "name_de": "German name of the station",
                        "name_en": "English name of the station",
                        "name_es": "Spanish name of the station",
                        "name_fr": "French name of the station",
                        "name_pt": "Portuguese name of the station",
                        "name_ru": "Russian name of the station",
                        "name_zh": "Chinese name of the station",
                        "name_zh-Hans": "Simplified Chinese name of the station",
                        "network": "The network(s) that the station serves. Useful for icon styling."
                    },
                    "id": "rail_station_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "elevation_ft": "Integer elevation in feet",
                        "elevation_m": "Integer elevation in meters",
                        "maki": "One of: 'mountain', 'volcano'",
                        "name": "Local name of the peak",
                        "name_ar": "Arabic name of the peak",
                        "name_de": "German name of the peak",
                        "name_en": "English name of the peak",
                        "name_es": "Spanish name of the peak",
                        "name_fr": "French name of the peak",
                        "name_pt": "Portuguese name of the peak",
                        "name_ru": "Russian name of the peak",
                        "name_zh": "Chinese name of the peak",
                        "name_zh-Hans": "Simplified Chinese name of the peak"
                    },
                    "id": "mountain_peak_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "localrank": "Number. Priority relative to nearby POIs. Useful for limiting label density.",
                        "maki": "The name of the Maki icon that should be used for the POI",
                        "name": "Local name of the POI",
                        "name_ar": "Arabic name of the POI",
                        "name_de": "German name of the POI",
                        "name_en": "English name of the POI",
                        "name_es": "Spanish name of the POI",
                        "name_fr": "French name of the POI",
                        "name_pt": "Portuguese name of the POI",
                        "name_ru": "Russian name of the POI",
                        "name_zh": "Chinese name of the POI",
                        "name_zh-Hans": "Simplified Chinese name of the POI",
                        "ref": "Short reference code, if any",
                        "scalerank": "Number. 1-5. Useful for styling icon sizes and minimum zoom levels.",
                        "type": "The original OSM tag value"
                    },
                    "id": "poi_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "class": "The class of road the junction is on. Matches the classes in the road layer.",
                        "name": "A longer name",
                        "ref": "A short identifier",
                        "reflen": "The number of characters in the ref field.",
                        "type": "The type of road the junction is on. Matches the types in the road layer."
                    },
                    "id": "motorway_junction",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "class": "One of: 'motorway', 'motorway_link', 'trunk', 'primary', 'secondary', 'tertiary', 'link', 'street', 'street_limited', 'pedestrian', 'construction', 'track', 'service', 'ferry', 'path', 'golf'",
                        "iso_3166_2": "Text. The ISO 3166-2 code of the state/province/region the road is in.",
                        "len": "Number. Approximate length of the road segment in Mercator meters.",
                        "localrank": "Number. Used for shield points only. Priority relative to nearby shields. Useful for limiting shield density.",
                        "name": "Local name of the road",
                        "name_ar": "Arabic name of the road",
                        "name_de": "German name of the road",
                        "name_en": "English name of the road",
                        "name_es": "Spanish name of the road",
                        "name_fr": "French name of the road",
                        "name_pt": "Portuguese name of the road",
                        "name_ru": "Russian name of the road",
                        "name_zh": "Chinese name of the road",
                        "name_zh-Hans": "Simplified Chinese name of the road",
                        "ref": "Route number of the road",
                        "reflen": "Number. How many characters long the ref tag is. Useful for shield styling.",
                        "shield": "The shield style to use. One of: default, mx-federal, mx-state, us-highway, us-highway-alternate, us-highway-business, us-highway-duplex, us-interstate, us-interstate-business, us-interstate-duplex, us-interstate-truck, us-state"
                    },
                    "id": "road_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "class": "One of: river, canal, stream, stream_intermittent",
                        "name": "Local name of the waterway",
                        "name_ar": "Arabic name of the waterway",
                        "name_de": "German name of the waterway",
                        "name_en": "English name of the waterway",
                        "name_es": "Spanish name of the waterway",
                        "name_fr": "French name of the waterway",
                        "name_pt": "Portuguese name of the waterway",
                        "name_ru": "Russian name of the waterway",
                        "name_zh": "Chinese name of the waterway",
                        "name_zh-Hans": "Simplified Chinese name of the waterway",
                        "type": "One of: river, canal, stream"
                    },
                    "id": "waterway_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }, {
                    "description": "",
                    "fields": {
                        "house_num": "House number"
                    },
                    "id": "housenum_label",
                    "source": "mapbox.mapbox-streets-v7",
                    "source_name": "Mapbox Streets V7"
                }],
                "webpage": "https://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/page.html?access_token=pk.eyJ1IjoibGVjZWxlcyIsImEiOiJjajUyZXBzbXEwZjYxMnFwOWFxeHd5ZDY3In0.dftZ4LdgXBkdZI0_l7pcNA",
                "type": "vector"
            }
        