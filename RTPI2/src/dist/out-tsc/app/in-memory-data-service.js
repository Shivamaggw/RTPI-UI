"use strict";
var InMemoryDataService /*implements InMemoryDbService*/ = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var product = [
            { title: "hbvhx", price: 2000 }
        ];
        return { product: product };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data-service.js.map