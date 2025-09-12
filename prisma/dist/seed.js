"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var products = [
    {
        name: "Sakarias Armchair",
        type: "Chair",
        price: 200,
        description: "Comfortable armchair with a modern design, perfect for any living room.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1598300055366-c5e90b99f7b8?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1598300055367-2f3c6b0e7c56?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.2,
    },
    {
        name: "Minimalist Dining Table",
        type: "Table",
        price: 450,
        description: "Sleek dining table in natural wood, ideal for minimalistic interiors.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1600566754697-bab2dbf2b3ee?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1600566754698-3b0e5e64c8f0?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.5,
    },
    {
        name: "Comfort Sofa",
        type: "Sofa",
        price: 800,
        description: "Luxurious sofa with soft cushions, perfect for lounging in style.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1616627986603-5d0b33e22b92?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1616627986604-1fbe04db6f5c?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.7,
    },
    {
        name: "Elegant Floor Lamp",
        type: "Lamp",
        price: 120,
        description: "Minimalist floor lamp with soft warm light, perfect for living rooms.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1601924582971-7f1b812f3c3d?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1601924582972-9f1e5b8c7f50?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.0,
    },
    {
        name: "Wooden Coffee Table",
        type: "Table",
        price: 250,
        description: "Simple coffee table in oak wood, perfect for any living space.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1616627986605-2c8f2e31c6a5?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1616627986606-1a7e32c6b2b0?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.3,
    },
    {
        name: "Scandinavian Armchair",
        type: "Chair",
        price: 180,
        description: "Minimalist armchair with light wooden legs and soft fabric.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1586023492126-34b2c045efd8?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.1,
    },
    {
        name: "Modern Sofa",
        type: "Sofa",
        price: 750,
        description: "Compact modern sofa with clean lines, perfect for apartments.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1616627986607-3b5c1d7c6f9e?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1616627986608-4d2c3b6c7d1a?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.4,
    },
    {
        name: "Minimal Desk Lamp",
        type: "Lamp",
        price: 80,
        description: "Compact desk lamp with adjustable arm, perfect for workspaces.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1601924582973-8b1d1c7f3a4f?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1601924582974-7a2d2e6b8c3e?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.2,
    },
    {
        name: "Oak Dining Chair",
        type: "Chair",
        price: 150,
        description: "Elegant dining chair in oak wood, minimalist design.",
        images: {
            create: [
                {
                    url: "https://images.unsplash.com/photo-1586023492127-1a2b3c045efd?auto=format&fit=crop&w=400&q=80",
                    isMain: true,
                },
                {
                    url: "https://images.unsplash.com/photo-1586023492128-2b3c4d045efe?auto=format&fit=crop&w=400&q=80",
                },
            ],
        },
        avgRating: 4.0,
    },
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, products_1, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, products_1 = products;
                    _a.label = 1;
                case 1:
                    if (!(_i < products_1.length)) return [3 /*break*/, 4];
                    product = products_1[_i];
                    return [4 /*yield*/, prisma.product.create({
                            data: product,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("✅ 9 products seeded with images");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
