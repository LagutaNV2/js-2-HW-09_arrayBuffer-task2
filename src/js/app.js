// TODO: write your code here
// У вас есть функция getBuffer(), которая эмулирует создание объекта типа ArrayBuffer.
// Вам необходимо реализовать класс ArrayBufferConverter с методом load(), который может загружать данные (load(buffer)),
// и методом toString, который умеет переводить содержимое загруженного ArrayBuffer в строку.


export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  // Метод для загрузки данных
  load(buffer) {
    this.buffer = buffer;
  }

  // Метод для преобразования данных в строку
  toString() {
    if (!this.buffer) {
      throw new Error('Buffer не загружен.');
    }

    const bufferView = new Uint16Array(this.buffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}

// Функция для создания ArrayBuffer (дано в условии задачи)
export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
