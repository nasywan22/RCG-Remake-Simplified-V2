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
var System = /** @class */ (function () {
    function System() {
        this.isCopyable = false;
    }
    System.prototype.Randomizer = function () {
        var character = "1234567890abcdefABCDEF";
        var HEXCode = "#";
        for (var index = 0; index < 6; index++) {
            HEXCode += character[Math.floor(Math.random() * character.length)];
        }
        return HEXCode;
    };
    System.prototype.GACHASystem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ms, count, HEXCode_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ms = 50;
                        count = 0;
                        _a.label = 1;
                    case 1:
                        if (!isRun) return [3 /*break*/, 3];
                        return [4 /*yield*/, sleep(ms)];
                    case 2:
                        _a.sent();
                        count++;
                        HEXCode_1 = this.Randomizer();
                        document.body.style.backgroundColor = HEXCode_1;
                        txt.textContent = HEXCode_1;
                        if (ms >= 1500) {
                            isRun = false;
                            ui.cancelGacha();
                            return [3 /*break*/, 3];
                        }
                        if (count % 2 !== 0) {
                            ms += 100;
                            return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    System.prototype.CopySystem = function () {
        var _this = this;
        copyBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(txt.textContent)
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    ui.animateCopied();
                    return [2 /*return*/];
                });
            }); })
                .catch(function (err) {
                console.log("Error uy..." + err);
            });
        });
    };
    return System;
}());
var UI = /** @class */ (function () {
    function UI() {
        this.reload = document.createElement("i");
        this.angle = 0;
        this.isRotate = false;
    }
    UI.prototype.animateGacha = function () {
        btn.textContent = '';
        btn.style.borderRadius = '60px';
        btn.style.padding = '9px 13px';
        if (!this.isRotate) {
            this.isRotate = true;
            btn.appendChild(this.reload);
            this.reload.classList.add("fa-solid", "fa-rotate-right");
        }
    };
    UI.prototype.cancelGacha = function () {
        this.isRotate = false;
        this.reload.classList.remove('fa-solid', 'fa-rotate-rigth');
        btn.removeChild(this.reload);
        btn.style.borderRadius = '0px';
        btn.style.padding = '10px 25px';
        btn.textContent = 'GACHA!';
    };
    UI.prototype.animateCopied = function () {
        return __awaiter(this, void 0, void 0, function () {
            var copyIcon, checkIcon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        copyIcon = document.getElementById("copy");
                        checkIcon = document.createElement('i');
                        copyIcon.style.transform = 'rotate(180deg)';
                        return [4 /*yield*/, sleep(200)];
                    case 1:
                        _a.sent();
                        copyIcon.style.opacity = '0';
                        copyIcon.style.display = 'none';
                        return [4 /*yield*/, sleep(50)];
                    case 2:
                        _a.sent();
                        checkIcon.classList.add('fa-solid', 'fa-check');
                        copyBtn.appendChild(checkIcon);
                        return [4 /*yield*/, sleep(50)];
                    case 3:
                        _a.sent();
                        checkIcon.style.opacity = '100%';
                        checkIcon.style.transform = 'rotate(360deg)';
                        return [4 /*yield*/, sleep(50)];
                    case 4:
                        _a.sent();
                        checkIcon.style.color = 'lime';
                        return [4 /*yield*/, sleep(1500)];
                    case 5:
                        _a.sent();
                        checkIcon.style.color = 'white';
                        checkIcon.style.transform = 'rotate(0deg)';
                        checkIcon.style.opacity = '0';
                        return [4 /*yield*/, sleep(200)];
                    case 6:
                        _a.sent();
                        copyBtn.removeChild(checkIcon);
                        copyIcon.style.display = 'block';
                        copyIcon.style.opacity = '100%';
                        copyIcon.style.transform = 'rotate(0deg)';
                        return [2 /*return*/];
                }
            });
        });
    };
    return UI;
}());
// SLEEP
var sleep = function (ms) {
    return new Promise(function (r) {
        setTimeout(r, ms);
    });
};
// MAIN
var isRun = false;
var copyBtn = document.getElementById("copyBtn");
var txt = document.getElementById("text");
var btn = document.getElementById("btn");
var system = new System();
var ui = new UI();
// OPENING
var HEXCode = system.Randomizer();
document.body.style.backgroundColor = HEXCode;
txt.textContent = HEXCode;
// EventListener
btn.addEventListener('click', function () {
    if (!isRun) {
        isRun = true;
        ui.animateGacha();
        system.GACHASystem();
    }
    else {
        isRun = false;
        ui.cancelGacha();
    }
});
system.CopySystem();
