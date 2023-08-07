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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var generateApi = require('swagger-typescript-api').generateApi;
var fs = require('fs');
var axios = require('axios');
var path = require('path');
require('dotenv').config();
var apiList = ['system', 'cps', 'authentication', 'notify', 'mdc', 'dnc', 'tpm', 'trace', 'visual', 'sync', 'tool', 'perf', 'dmp-log', 'fms', 'coproduction', 'andon', 'lms'];
apiList.map(function (api) {
    fetchText(api, "".concat(process.env.VITE_PROXY, "/v2/api-docs?group=").concat(api));
});
// 生成接口
function fetchText(api, url) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get(url)];
                case 1:
                    res = _a.sent();
                    fs.writeFile("./interface/".concat(api, ".json"), JSON.stringify(res.data), function (err) {
                        if (err)
                            return;
                        generateApi({
                            name: "".concat(api, "_api.ts"),
                            input: "./interface/".concat(api, ".json"),
                            output: path.resolve(process.cwd(), "./src/api/modules"),
                            generateClient: true,
                            generateRouteTypes: false,
                            silent: true,
                            templates: './api-templates',
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function toCamelCase(str) {
    var words = str.split('-');
    var camelCaseWords = words.map(function (word) { return word.toLowerCase().replace(/( |^)[a-z]/g, function (L) { return L.toUpperCase(); }); });
    var word = camelCaseWords.join('');
    return word === 'Authentication' ? 'Auth' : word;
}
// 自动写入 api index
function writeApiIndex() {
    var filePath = path.resolve(process.cwd(), "./src/api/index.ts");
    fs.writeFileSync(filePath, '');
    // 设定要循环写入的次数
    apiList.map(function (api) {
        var text = "import { Api as ".concat(toCamelCase(api), " } from './modules/").concat(api, "_api'; \n");
        // 追加写入文件
        fs.appendFileSync(filePath, text);
    });
    var text = 'export default {\n';
    text += "  ...new Cps().bladeCps,\n  ...new Mdc().bladeMdc,\n  ...new Mdc().bladeCps,\n  ...new Auth().bladeAuth,\n  ...new Notify().bladeNotify,\n  ...new System().bladeUser,\n  ...new System().bladeSystem,\n  ...new System().bladeResource,\n  ...new Tpm().bladeTpm,\n  ...new Dnc().bladeDnc,\n  ...new Visual().bladeVisual,\n  ...new Sync().bladeSync,\n  ...new Tool().bladeTool,\n  ...new Fms().bladeFms,\n  ...new Coproduction().bladeCoproduction,\n  ...new DmpLog().bladeDmpLog,\n  ...new Andon().bladeAndon,\n  ...new Trace().bladeTrace,\n  ...new Perf().bladePerf,\n  ...new Lms().bladeLms,\n";
    text += "};";
    fs.appendFileSync(filePath, text);
}
writeApiIndex();
