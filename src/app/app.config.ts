import { InjectionToken } from '@angular/core';

export interface AppConfig {
    dataEndpoint: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const LOCAL_CONFIG: AppConfig = {
    dataEndpoint: 'assets/data.json'
};
