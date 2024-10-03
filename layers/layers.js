var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DENPASAR_1 = new ol.format.GeoJSON();
var features_DENPASAR_1 = format_DENPASAR_1.readFeatures(json_DENPASAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DENPASAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DENPASAR_1.addFeatures(features_DENPASAR_1);
var lyr_DENPASAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DENPASAR_1, 
                style: style_DENPASAR_1,
                popuplayertitle: "DENPASAR",
                interactive: true,
    title: 'DENPASAR<br />\
    <img src="styles/legend/DENPASAR_1_0.png" /> Dauh Puri<br />\
    <img src="styles/legend/DENPASAR_1_1.png" /> Dauh Puri Kangin<br />\
    <img src="styles/legend/DENPASAR_1_2.png" /> Dauh Puri Kauh<br />\
    <img src="styles/legend/DENPASAR_1_3.png" /> Dauh Puri Klod<br />\
    <img src="styles/legend/DENPASAR_1_4.png" /> Padangsambian<br />\
    <img src="styles/legend/DENPASAR_1_5.png" /> Padangsambian Kaja<br />\
    <img src="styles/legend/DENPASAR_1_6.png" /> Padangsambian Klod<br />\
    <img src="styles/legend/DENPASAR_1_7.png" /> Pemecutan<br />\
    <img src="styles/legend/DENPASAR_1_8.png" /> Pemecutan Klod<br />\
    <img src="styles/legend/DENPASAR_1_9.png" /> Tegal Harum<br />\
    <img src="styles/legend/DENPASAR_1_10.png" /> Tegal Kertha<br />'
        });
var format_jalan2_2 = new ol.format.GeoJSON();
var features_jalan2_2 = format_jalan2_2.readFeatures(json_jalan2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan2_2.addFeatures(features_jalan2_2);
var lyr_jalan2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan2_2, 
                style: style_jalan2_2,
                popuplayertitle: "jalan2",
                interactive: true,
    title: 'jalan2<br />\
    <img src="styles/legend/jalan2_2_0.png" /> primary<br />\
    <img src="styles/legend/jalan2_2_1.png" /> secondary<br />'
        });
var format_TITIK_3 = new ol.format.GeoJSON();
var features_TITIK_3 = format_TITIK_3.readFeatures(json_TITIK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_3.addFeatures(features_TITIK_3);
var lyr_TITIK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIK_3, 
                style: style_TITIK_3,
                popuplayertitle: "TITIK",
                interactive: true,
    title: 'TITIK<br />\
    <img src="styles/legend/TITIK_3_0.png" /> kantor camat denpasar barat<br />\
    <img src="styles/legend/TITIK_3_1.png" /> Kantor Desa Dauh Puri Kelod<br />\
    <img src="styles/legend/TITIK_3_2.png" /> Kantor Desa kantor Desa Tegal Kertha<br />\
    <img src="styles/legend/TITIK_3_3.png" /> Kantor Desa PadangSambian<br />\
    <img src="styles/legend/TITIK_3_4.png" /> Kantor Desa Padangsambian Kaja<br />\
    <img src="styles/legend/TITIK_3_5.png" /> Kantor Desa Pemecutan Kelod Denpasar<br />\
    <img src="styles/legend/TITIK_3_6.png" /> Kantor Desa Tegal Arum Denpasar<br />\
    <img src="styles/legend/TITIK_3_7.png" /> Kantor Kepala Desa Padangsambian Klod<br />\
    <img src="styles/legend/TITIK_3_8.png" /> Kantor Perbekel Desa Dauh Puri Kangin<br />\
    <img src="styles/legend/TITIK_3_9.png" /> Kantor Perbekel Desa Dauh Puri Kauh Denpasar<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DENPASAR_1.setVisible(true);lyr_jalan2_2.setVisible(true);lyr_TITIK_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DENPASAR_1,lyr_jalan2_2,lyr_TITIK_3];
lyr_DENPASAR_1.set('fieldAliases', {'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', });
lyr_jalan2_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_TITIK_3.set('fieldAliases', {'Kantor__Pe': 'Kantor__Pe', 'X': 'X', 'Y': 'Y', });
lyr_DENPASAR_1.set('fieldImages', {'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', });
lyr_jalan2_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_TITIK_3.set('fieldImages', {'Kantor__Pe': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_DENPASAR_1.set('fieldLabels', {'NAME_0': 'no label', 'NAME_1': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'NAME_4': 'inline label - always visible', });
lyr_jalan2_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - always visible', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_TITIK_3.set('fieldLabels', {'Kantor__Pe': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_TITIK_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});