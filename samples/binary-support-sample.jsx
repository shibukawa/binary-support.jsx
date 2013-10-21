import "console.jsx";
import "binary-support.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        console.log("ArrayBuffer:", BinarySupport.arraybuffer);
        console.log("NodeBuffer:", BinarySupport.nodebuffer);
        console.log("Uint8Array:", BinarySupport.uint8array);
        console.log("Blob:", BinarySupport.blob);
    }
}
