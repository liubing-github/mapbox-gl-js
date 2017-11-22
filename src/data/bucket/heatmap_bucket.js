// @flow

const CircleBucket = require('./circle_bucket');
const {register} = require('../../util/web_worker_transfer');

import type StyleLayer from '../../style/style_layer';

const heatmapInterface = {
    layoutAttributes: CircleBucket.programInterface.layoutAttributes,
    indexArrayType: CircleBucket.programInterface.indexArrayType,

    paintAttributes: [
        {property: 'heatmap-weight'}
    ]
};

class HeatmapBucket extends CircleBucket {
    layers: Array<StyleLayer>;
}

register(HeatmapBucket, {omit: ['layers']});

HeatmapBucket.programInterface = heatmapInterface;

module.exports = HeatmapBucket;
