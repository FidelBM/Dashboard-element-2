
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  passwordHash: 'passwordHash',
  isActive: 'isActive',
  roleId: 'roleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientScalarFieldEnum = {
  id: 'id',
  name: 'name',
  externalRef: 'externalRef',
  riskStatus: 'riskStatus',
  accumulatedRiskScore: 'accumulatedRiskScore',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FileUploadScalarFieldEnum = {
  id: 'id',
  originalFileName: 'originalFileName',
  storedFileName: 'storedFileName',
  mimeType: 'mimeType',
  status: 'status',
  totalRows: 'totalRows',
  validRows: 'validRows',
  invalidRows: 'invalidRows',
  warnings: 'warnings',
  uploadedById: 'uploadedById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  fileUploadId: 'fileUploadId',
  createdById: 'createdById',
  sourceRecordId: 'sourceRecordId',
  reviewDate: 'reviewDate',
  year: 'year',
  quarter: 'quarter',
  month: 'month',
  source: 'source',
  comment: 'comment',
  originalSentiment: 'originalSentiment',
  category: 'category',
  subcategory: 'subcategory',
  product: 'product',
  detail: 'detail',
  originalClassification: 'originalClassification',
  npsScore: 'npsScore',
  rawData: 'rawData',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PredictionScalarFieldEnum = {
  id: 'id',
  reviewId: 'reviewId',
  riskLabel: 'riskLabel',
  probability: 'probability',
  sentiment: 'sentiment',
  primaryCause: 'primaryCause',
  secondaryCause: 'secondaryCause',
  confidence: 'confidence',
  urgency: 'urgency',
  recommendation: 'recommendation',
  explanation: 'explanation',
  detectedSignals: 'detectedSignals',
  warnings: 'warnings',
  triggeredRules: 'triggeredRules',
  modelVersion: 'modelVersion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UploadErrorScalarFieldEnum = {
  id: 'id',
  fileUploadId: 'fileUploadId',
  rowNumber: 'rowNumber',
  sourceRecordId: 'sourceRecordId',
  reason: 'reason',
  rawData: 'rawData',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HumanCorrectionScalarFieldEnum = {
  id: 'id',
  predictionId: 'predictionId',
  correctedById: 'correctedById',
  originalRiskLabel: 'originalRiskLabel',
  correctedRiskLabel: 'correctedRiskLabel',
  originalSentiment: 'originalSentiment',
  correctedSentiment: 'correctedSentiment',
  originalPrimaryCause: 'originalPrimaryCause',
  correctedPrimaryCause: 'correctedPrimaryCause',
  reason: 'reason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RecommendationFeedbackScalarFieldEnum = {
  id: 'id',
  predictionId: 'predictionId',
  userId: 'userId',
  isUseful: 'isUseful',
  comment: 'comment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FollowUpScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  reviewId: 'reviewId',
  assignedToId: 'assignedToId',
  createdById: 'createdById',
  status: 'status',
  contactDate: 'contactDate',
  actionTaken: 'actionTaken',
  escalatedArea: 'escalatedArea',
  contactResult: 'contactResult',
  note: 'note',
  closingNote: 'closingNote',
  closedAt: 'closedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roleName: 'roleName',
  action: 'action',
  entityType: 'entityType',
  entityId: 'entityId',
  previousValues: 'previousValues',
  newValues: 'newValues',
  description: 'description',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.RoleName = exports.$Enums.RoleName = {
  CUSTOMER_SUCCESS: 'CUSTOMER_SUCCESS',
  ANALYST_QUALITY: 'ANALYST_QUALITY',
  COMMERCIAL_DIRECTION: 'COMMERCIAL_DIRECTION',
  ADMIN: 'ADMIN'
};

exports.ClientRiskStatus = exports.$Enums.ClientRiskStatus = {
  CRITICAL: 'CRITICAL',
  WATCHLIST: 'WATCHLIST',
  STABLE: 'STABLE',
  MANUAL_REVIEW: 'MANUAL_REVIEW'
};

exports.RiskLabel = exports.$Enums.RiskLabel = {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  MANUAL_REVIEW: 'MANUAL_REVIEW'
};

exports.SentimentLabel = exports.$Enums.SentimentLabel = {
  POSITIVE: 'POSITIVE',
  NEUTRAL: 'NEUTRAL',
  NEGATIVE: 'NEGATIVE'
};

exports.ConfidenceLevel = exports.$Enums.ConfidenceLevel = {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

exports.FollowUpStatus = exports.$Enums.FollowUpStatus = {
  PENDING: 'PENDING',
  CONTACTED: 'CONTACTED',
  ESCALATED: 'ESCALATED',
  IN_PROGRESS: 'IN_PROGRESS',
  CLOSED: 'CLOSED'
};

exports.Prisma.ModelName = {
  Role: 'Role',
  User: 'User',
  Client: 'Client',
  FileUpload: 'FileUpload',
  Review: 'Review',
  Prediction: 'Prediction',
  UploadError: 'UploadError',
  HumanCorrection: 'HumanCorrection',
  RecommendationFeedback: 'RecommendationFeedback',
  FollowUp: 'FollowUp',
  AuditLog: 'AuditLog'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
