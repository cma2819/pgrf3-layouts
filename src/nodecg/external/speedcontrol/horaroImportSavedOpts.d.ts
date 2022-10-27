/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type HoraroImportSavedOpts = {
	columns?: {
		game?: ColumnSetting;
		gameTwitch?: ColumnSetting;
		category?: ColumnSetting;
		system?: ColumnSetting;
		region?: ColumnSetting;
		release?: ColumnSetting;
		player?: ColumnSetting;
		custom?: {
			[k: string]: ColumnSetting;
		};
	};
	split?: 0 | 1;
} | null;
export type ColumnSetting = number | null;
