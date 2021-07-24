/**
 * File: /src/types.ts
 * Project: nestjs-tracing
 * File Created: 14-07-2021 11:43:59
 * Author: Clay Risser <email@clayrisser.com>
 * -----
 * Last Modified: 19-07-2021 16:21:08
 * Modified By: Clay Risser <email@clayrisser.com>
 * -----
 * Silicon Hills LLC (c) Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ModuleMetadata } from '@nestjs/common/interfaces';

export interface HashMap<T = any> {
  [key: string]: T;
}

export interface RegisterOptions {
  resources?: HashMap<string[]>;
  roles?: string[];
}

export interface TracingOptions {}

export interface TracingAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useFactory?: (...args: any[]) => Promise<TracingOptions> | TracingOptions;
}

export const TRACING_OPTIONS = 'TRACING_OPTIONS';