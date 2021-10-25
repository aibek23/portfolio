import React from 'react';
import { YMaps, Map, Placemark, GeoObject, ObjectManager, } from 'react-yandex-maps';
import MapMarcet from '../../img/svg/MapMarcet.svg';

function YndexMap() {
    return (
        <YMaps  >
            <div >
                <Map width="100%" height="417px" defaultState={{ center: [42.874225, 74.572943], zoom: 12 }}>
                    <Placemark geometry={[42.874225, 74.572943]}
                        properties={{
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка',
                        }}
                        options={{
                            // Options. You must specify this type of layout.
                            iconLayout: 'default#image',
                            // Custom image for the placemark icon.
                            iconImageHref: MapMarcet,
                            // The size of the placemark.
                            iconImageSize: [30, 42],
                            // The offset of the upper left corner of the icon relative
                            // to its "tail" (the anchor point).
                            iconImageOffset: [-3, -42],
                        }}
                    />
                    {/* <GeoObject
                    var glyphIcon1 = new ymaps.Placemark([55.684, 37.738], {}, {
      preset: 'islands#redGlyphIcon',            
      iconGlyph: 'music',
      iconGlyphColor: 'red',
    }),/> */}
                    {/* <ObjectManager
                        options={{
                            clusterize: true,
                            gridSize: 32,
                        }}
                        objects={{
                            preset: 'islands#greenDotIcon',
                        }}
                        clusters={{
                            preset: 'islands#greenClusterIcons',
                        }}

                    /> */}

                </Map>

            </div>
        </YMaps>
    )
}
export default YndexMap;