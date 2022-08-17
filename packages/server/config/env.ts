import * as fs from 'fs';
import * as path from 'path';
const isProd = process.env.NODE_ENV === 'production';

function parseEnv() {
  const localEnv = path.resolve(__dirname, './../.env');
  const prodEnv = path.resolve(__dirname, './../.env.prod');

  if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
    throw new Error('缺少环境配置文件');
  }

  const envFilePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;

  return envFilePath;
}

const envFilePath = parseEnv();

export default envFilePath;
