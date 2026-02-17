import { defineErrorCodes } from "@better-auth/core/utils/error-codes";

export const TELEGRAM_ERROR_CODES = defineErrorCodes({
	EXPIRED_AUTH_DATE: "Expired auth date",
	INVALID_DATA_OR_HASH: "Failed to validate data or hash",
	FAILED_TO_CREATE_USER: "Failed to create user",
	FAILED_TO_CREATE_SESSION: "Failed to create session",
});
