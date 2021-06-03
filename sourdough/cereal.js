let port;
let keepReading = true;
let reader;

async function cereal()
{

// Wait for the serial port to open.




// Prompt user to select an Arduino Uno device.
    const port = await navigator.serial.requestPort();

    await port.open({ baudRate: 9600 });

    //const reader = port.readable.getReader();

// Listen to data coming from the serial device.
    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

// Listen to data coming from the serial device.
    while (true) {
        const { value, done } = await reader.read();
        if (done) {
            // Allow the serial port to be closed later.
            reader.releaseLock();
            break;
        }
        // value is a string.
        console.log(value);
        real_time_arr2.push(value);
    }

}