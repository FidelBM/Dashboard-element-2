
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model FileUpload
 * 
 */
export type FileUpload = $Result.DefaultSelection<Prisma.$FileUploadPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Prediction
 * 
 */
export type Prediction = $Result.DefaultSelection<Prisma.$PredictionPayload>
/**
 * Model UploadError
 * 
 */
export type UploadError = $Result.DefaultSelection<Prisma.$UploadErrorPayload>
/**
 * Model HumanCorrection
 * 
 */
export type HumanCorrection = $Result.DefaultSelection<Prisma.$HumanCorrectionPayload>
/**
 * Model RecommendationFeedback
 * 
 */
export type RecommendationFeedback = $Result.DefaultSelection<Prisma.$RecommendationFeedbackPayload>
/**
 * Model FollowUp
 * 
 */
export type FollowUp = $Result.DefaultSelection<Prisma.$FollowUpPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  CUSTOMER_SUCCESS: 'CUSTOMER_SUCCESS',
  ANALYST_QUALITY: 'ANALYST_QUALITY',
  COMMERCIAL_DIRECTION: 'COMMERCIAL_DIRECTION',
  ADMIN: 'ADMIN'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const RiskLabel: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  MANUAL_REVIEW: 'MANUAL_REVIEW'
};

export type RiskLabel = (typeof RiskLabel)[keyof typeof RiskLabel]


export const SentimentLabel: {
  POSITIVE: 'POSITIVE',
  NEUTRAL: 'NEUTRAL',
  NEGATIVE: 'NEGATIVE'
};

export type SentimentLabel = (typeof SentimentLabel)[keyof typeof SentimentLabel]


export const ConfidenceLevel: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type ConfidenceLevel = (typeof ConfidenceLevel)[keyof typeof ConfidenceLevel]


export const ClientRiskStatus: {
  CRITICAL: 'CRITICAL',
  WATCHLIST: 'WATCHLIST',
  STABLE: 'STABLE',
  MANUAL_REVIEW: 'MANUAL_REVIEW'
};

export type ClientRiskStatus = (typeof ClientRiskStatus)[keyof typeof ClientRiskStatus]


export const FollowUpStatus: {
  PENDING: 'PENDING',
  CONTACTED: 'CONTACTED',
  ESCALATED: 'ESCALATED',
  IN_PROGRESS: 'IN_PROGRESS',
  CLOSED: 'CLOSED'
};

export type FollowUpStatus = (typeof FollowUpStatus)[keyof typeof FollowUpStatus]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type RiskLabel = $Enums.RiskLabel

export const RiskLabel: typeof $Enums.RiskLabel

export type SentimentLabel = $Enums.SentimentLabel

export const SentimentLabel: typeof $Enums.SentimentLabel

export type ConfidenceLevel = $Enums.ConfidenceLevel

export const ConfidenceLevel: typeof $Enums.ConfidenceLevel

export type ClientRiskStatus = $Enums.ClientRiskStatus

export const ClientRiskStatus: typeof $Enums.ClientRiskStatus

export type FollowUpStatus = $Enums.FollowUpStatus

export const FollowUpStatus: typeof $Enums.FollowUpStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.fileUpload`: Exposes CRUD operations for the **FileUpload** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileUploads
    * const fileUploads = await prisma.fileUpload.findMany()
    * ```
    */
  get fileUpload(): Prisma.FileUploadDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.prediction`: Exposes CRUD operations for the **Prediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Predictions
    * const predictions = await prisma.prediction.findMany()
    * ```
    */
  get prediction(): Prisma.PredictionDelegate<ExtArgs>;

  /**
   * `prisma.uploadError`: Exposes CRUD operations for the **UploadError** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadErrors
    * const uploadErrors = await prisma.uploadError.findMany()
    * ```
    */
  get uploadError(): Prisma.UploadErrorDelegate<ExtArgs>;

  /**
   * `prisma.humanCorrection`: Exposes CRUD operations for the **HumanCorrection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HumanCorrections
    * const humanCorrections = await prisma.humanCorrection.findMany()
    * ```
    */
  get humanCorrection(): Prisma.HumanCorrectionDelegate<ExtArgs>;

  /**
   * `prisma.recommendationFeedback`: Exposes CRUD operations for the **RecommendationFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecommendationFeedbacks
    * const recommendationFeedbacks = await prisma.recommendationFeedback.findMany()
    * ```
    */
  get recommendationFeedback(): Prisma.RecommendationFeedbackDelegate<ExtArgs>;

  /**
   * `prisma.followUp`: Exposes CRUD operations for the **FollowUp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowUps
    * const followUps = await prisma.followUp.findMany()
    * ```
    */
  get followUp(): Prisma.FollowUpDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "role" | "user" | "client" | "fileUpload" | "review" | "prediction" | "uploadError" | "humanCorrection" | "recommendationFeedback" | "followUp" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      FileUpload: {
        payload: Prisma.$FileUploadPayload<ExtArgs>
        fields: Prisma.FileUploadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileUploadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileUploadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findFirst: {
            args: Prisma.FileUploadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileUploadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          findMany: {
            args: Prisma.FileUploadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          create: {
            args: Prisma.FileUploadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          createMany: {
            args: Prisma.FileUploadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileUploadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>[]
          }
          delete: {
            args: Prisma.FileUploadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          update: {
            args: Prisma.FileUploadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          deleteMany: {
            args: Prisma.FileUploadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUploadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileUploadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadPayload>
          }
          aggregate: {
            args: Prisma.FileUploadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileUpload>
          }
          groupBy: {
            args: Prisma.FileUploadGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileUploadGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileUploadCountArgs<ExtArgs>
            result: $Utils.Optional<FileUploadCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Prediction: {
        payload: Prisma.$PredictionPayload<ExtArgs>
        fields: Prisma.PredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findFirst: {
            args: Prisma.PredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findMany: {
            args: Prisma.PredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          create: {
            args: Prisma.PredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          createMany: {
            args: Prisma.PredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          delete: {
            args: Prisma.PredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          update: {
            args: Prisma.PredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          deleteMany: {
            args: Prisma.PredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          aggregate: {
            args: Prisma.PredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediction>
          }
          groupBy: {
            args: Prisma.PredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionCountAggregateOutputType> | number
          }
        }
      }
      UploadError: {
        payload: Prisma.$UploadErrorPayload<ExtArgs>
        fields: Prisma.UploadErrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadErrorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadErrorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload>
          }
          findFirst: {
            args: Prisma.UploadErrorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadErrorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload>
          }
          findMany: {
            args: Prisma.UploadErrorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload>[]
          }
          create: {
            args: Prisma.UploadErrorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload>
          }
          createMany: {
            args: Prisma.UploadErrorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadErrorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload>[]
          }
          delete: {
            args: Prisma.UploadErrorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload>
          }
          update: {
            args: Prisma.UploadErrorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload>
          }
          deleteMany: {
            args: Prisma.UploadErrorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadErrorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UploadErrorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadErrorPayload>
          }
          aggregate: {
            args: Prisma.UploadErrorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadError>
          }
          groupBy: {
            args: Prisma.UploadErrorGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadErrorGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadErrorCountArgs<ExtArgs>
            result: $Utils.Optional<UploadErrorCountAggregateOutputType> | number
          }
        }
      }
      HumanCorrection: {
        payload: Prisma.$HumanCorrectionPayload<ExtArgs>
        fields: Prisma.HumanCorrectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HumanCorrectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HumanCorrectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload>
          }
          findFirst: {
            args: Prisma.HumanCorrectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HumanCorrectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload>
          }
          findMany: {
            args: Prisma.HumanCorrectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload>[]
          }
          create: {
            args: Prisma.HumanCorrectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload>
          }
          createMany: {
            args: Prisma.HumanCorrectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HumanCorrectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload>[]
          }
          delete: {
            args: Prisma.HumanCorrectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload>
          }
          update: {
            args: Prisma.HumanCorrectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload>
          }
          deleteMany: {
            args: Prisma.HumanCorrectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HumanCorrectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HumanCorrectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanCorrectionPayload>
          }
          aggregate: {
            args: Prisma.HumanCorrectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHumanCorrection>
          }
          groupBy: {
            args: Prisma.HumanCorrectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HumanCorrectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HumanCorrectionCountArgs<ExtArgs>
            result: $Utils.Optional<HumanCorrectionCountAggregateOutputType> | number
          }
        }
      }
      RecommendationFeedback: {
        payload: Prisma.$RecommendationFeedbackPayload<ExtArgs>
        fields: Prisma.RecommendationFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          findMany: {
            args: Prisma.RecommendationFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>[]
          }
          create: {
            args: Prisma.RecommendationFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          createMany: {
            args: Prisma.RecommendationFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>[]
          }
          delete: {
            args: Prisma.RecommendationFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          update: {
            args: Prisma.RecommendationFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecommendationFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          aggregate: {
            args: Prisma.RecommendationFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendationFeedback>
          }
          groupBy: {
            args: Prisma.RecommendationFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationFeedbackCountAggregateOutputType> | number
          }
        }
      }
      FollowUp: {
        payload: Prisma.$FollowUpPayload<ExtArgs>
        fields: Prisma.FollowUpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowUpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowUpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          findFirst: {
            args: Prisma.FollowUpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowUpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          findMany: {
            args: Prisma.FollowUpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>[]
          }
          create: {
            args: Prisma.FollowUpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          createMany: {
            args: Prisma.FollowUpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowUpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>[]
          }
          delete: {
            args: Prisma.FollowUpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          update: {
            args: Prisma.FollowUpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          deleteMany: {
            args: Prisma.FollowUpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowUpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowUpPayload>
          }
          aggregate: {
            args: Prisma.FollowUpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowUp>
          }
          groupBy: {
            args: Prisma.FollowUpGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowUpGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowUpCountArgs<ExtArgs>
            result: $Utils.Optional<FollowUpCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    uploadedFiles: number
    manualReviews: number
    corrections: number
    recommendationFeedback: number
    assignedFollowUps: number
    createdFollowUps: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedFiles?: boolean | UserCountOutputTypeCountUploadedFilesArgs
    manualReviews?: boolean | UserCountOutputTypeCountManualReviewsArgs
    corrections?: boolean | UserCountOutputTypeCountCorrectionsArgs
    recommendationFeedback?: boolean | UserCountOutputTypeCountRecommendationFeedbackArgs
    assignedFollowUps?: boolean | UserCountOutputTypeCountAssignedFollowUpsArgs
    createdFollowUps?: boolean | UserCountOutputTypeCountCreatedFollowUpsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManualReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCorrectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HumanCorrectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendationFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationFeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    reviews: number
    followUps: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ClientCountOutputTypeCountReviewsArgs
    followUps?: boolean | ClientCountOutputTypeCountFollowUpsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
  }


  /**
   * Count Type FileUploadCountOutputType
   */

  export type FileUploadCountOutputType = {
    reviews: number
    errors: number
  }

  export type FileUploadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | FileUploadCountOutputTypeCountReviewsArgs
    errors?: boolean | FileUploadCountOutputTypeCountErrorsArgs
  }

  // Custom InputTypes
  /**
   * FileUploadCountOutputType without action
   */
  export type FileUploadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadCountOutputType
     */
    select?: FileUploadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileUploadCountOutputType without action
   */
  export type FileUploadCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * FileUploadCountOutputType without action
   */
  export type FileUploadCountOutputTypeCountErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadErrorWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    followUps: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followUps?: boolean | ReviewCountOutputTypeCountFollowUpsArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
  }


  /**
   * Count Type PredictionCountOutputType
   */

  export type PredictionCountOutputType = {
    humanCorrections: number
    recommendationFeedback: number
  }

  export type PredictionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    humanCorrections?: boolean | PredictionCountOutputTypeCountHumanCorrectionsArgs
    recommendationFeedback?: boolean | PredictionCountOutputTypeCountRecommendationFeedbackArgs
  }

  // Custom InputTypes
  /**
   * PredictionCountOutputType without action
   */
  export type PredictionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionCountOutputType
     */
    select?: PredictionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PredictionCountOutputType without action
   */
  export type PredictionCountOutputTypeCountHumanCorrectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HumanCorrectionWhereInput
  }

  /**
   * PredictionCountOutputType without action
   */
  export type PredictionCountOutputTypeCountRecommendationFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationFeedbackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: $Enums.RoleName
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.RoleName
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'RoleName'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    isActive: boolean | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    isActive: boolean | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    isActive: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    isActive?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    isActive?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    isActive?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    passwordHash: string | null
    isActive: boolean
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    isActive?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    uploadedFiles?: boolean | User$uploadedFilesArgs<ExtArgs>
    manualReviews?: boolean | User$manualReviewsArgs<ExtArgs>
    corrections?: boolean | User$correctionsArgs<ExtArgs>
    recommendationFeedback?: boolean | User$recommendationFeedbackArgs<ExtArgs>
    assignedFollowUps?: boolean | User$assignedFollowUpsArgs<ExtArgs>
    createdFollowUps?: boolean | User$createdFollowUpsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    isActive?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    isActive?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    uploadedFiles?: boolean | User$uploadedFilesArgs<ExtArgs>
    manualReviews?: boolean | User$manualReviewsArgs<ExtArgs>
    corrections?: boolean | User$correctionsArgs<ExtArgs>
    recommendationFeedback?: boolean | User$recommendationFeedbackArgs<ExtArgs>
    assignedFollowUps?: boolean | User$assignedFollowUpsArgs<ExtArgs>
    createdFollowUps?: boolean | User$createdFollowUpsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      uploadedFiles: Prisma.$FileUploadPayload<ExtArgs>[]
      manualReviews: Prisma.$ReviewPayload<ExtArgs>[]
      corrections: Prisma.$HumanCorrectionPayload<ExtArgs>[]
      recommendationFeedback: Prisma.$RecommendationFeedbackPayload<ExtArgs>[]
      assignedFollowUps: Prisma.$FollowUpPayload<ExtArgs>[]
      createdFollowUps: Prisma.$FollowUpPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      passwordHash: string | null
      isActive: boolean
      roleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    uploadedFiles<T extends User$uploadedFilesArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany"> | Null>
    manualReviews<T extends User$manualReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$manualReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    corrections<T extends User$correctionsArgs<ExtArgs> = {}>(args?: Subset<T, User$correctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "findMany"> | Null>
    recommendationFeedback<T extends User$recommendationFeedbackArgs<ExtArgs> = {}>(args?: Subset<T, User$recommendationFeedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findMany"> | Null>
    assignedFollowUps<T extends User$assignedFollowUpsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedFollowUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany"> | Null>
    createdFollowUps<T extends User$createdFollowUpsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdFollowUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.uploadedFiles
   */
  export type User$uploadedFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    cursor?: FileUploadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * User.manualReviews
   */
  export type User$manualReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.corrections
   */
  export type User$correctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    where?: HumanCorrectionWhereInput
    orderBy?: HumanCorrectionOrderByWithRelationInput | HumanCorrectionOrderByWithRelationInput[]
    cursor?: HumanCorrectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HumanCorrectionScalarFieldEnum | HumanCorrectionScalarFieldEnum[]
  }

  /**
   * User.recommendationFeedback
   */
  export type User$recommendationFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    where?: RecommendationFeedbackWhereInput
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    cursor?: RecommendationFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationFeedbackScalarFieldEnum | RecommendationFeedbackScalarFieldEnum[]
  }

  /**
   * User.assignedFollowUps
   */
  export type User$assignedFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    cursor?: FollowUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * User.createdFollowUps
   */
  export type User$createdFollowUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    cursor?: FollowUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    accumulatedRiskScore: number | null
  }

  export type ClientSumAggregateOutputType = {
    accumulatedRiskScore: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    externalRef: string | null
    riskStatus: $Enums.ClientRiskStatus | null
    accumulatedRiskScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    externalRef: string | null
    riskStatus: $Enums.ClientRiskStatus | null
    accumulatedRiskScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    externalRef: number
    riskStatus: number
    accumulatedRiskScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    accumulatedRiskScore?: true
  }

  export type ClientSumAggregateInputType = {
    accumulatedRiskScore?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    externalRef?: true
    riskStatus?: true
    accumulatedRiskScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    externalRef?: true
    riskStatus?: true
    accumulatedRiskScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    externalRef?: true
    riskStatus?: true
    accumulatedRiskScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    externalRef: string | null
    riskStatus: $Enums.ClientRiskStatus
    accumulatedRiskScore: number
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    externalRef?: boolean
    riskStatus?: boolean
    accumulatedRiskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | Client$reviewsArgs<ExtArgs>
    followUps?: boolean | Client$followUpsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    externalRef?: boolean
    riskStatus?: boolean
    accumulatedRiskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    externalRef?: boolean
    riskStatus?: boolean
    accumulatedRiskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Client$reviewsArgs<ExtArgs>
    followUps?: boolean | Client$followUpsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      followUps: Prisma.$FollowUpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      externalRef: string | null
      riskStatus: $Enums.ClientRiskStatus
      accumulatedRiskScore: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Client$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Client$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    followUps<T extends Client$followUpsArgs<ExtArgs> = {}>(args?: Subset<T, Client$followUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly externalRef: FieldRef<"Client", 'String'>
    readonly riskStatus: FieldRef<"Client", 'ClientRiskStatus'>
    readonly accumulatedRiskScore: FieldRef<"Client", 'Int'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.reviews
   */
  export type Client$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Client.followUps
   */
  export type Client$followUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    cursor?: FollowUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model FileUpload
   */

  export type AggregateFileUpload = {
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  export type FileUploadAvgAggregateOutputType = {
    totalRows: number | null
    validRows: number | null
    invalidRows: number | null
  }

  export type FileUploadSumAggregateOutputType = {
    totalRows: number | null
    validRows: number | null
    invalidRows: number | null
  }

  export type FileUploadMinAggregateOutputType = {
    id: string | null
    originalFileName: string | null
    storedFileName: string | null
    mimeType: string | null
    status: string | null
    totalRows: number | null
    validRows: number | null
    invalidRows: number | null
    uploadedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileUploadMaxAggregateOutputType = {
    id: string | null
    originalFileName: string | null
    storedFileName: string | null
    mimeType: string | null
    status: string | null
    totalRows: number | null
    validRows: number | null
    invalidRows: number | null
    uploadedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileUploadCountAggregateOutputType = {
    id: number
    originalFileName: number
    storedFileName: number
    mimeType: number
    status: number
    totalRows: number
    validRows: number
    invalidRows: number
    warnings: number
    uploadedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileUploadAvgAggregateInputType = {
    totalRows?: true
    validRows?: true
    invalidRows?: true
  }

  export type FileUploadSumAggregateInputType = {
    totalRows?: true
    validRows?: true
    invalidRows?: true
  }

  export type FileUploadMinAggregateInputType = {
    id?: true
    originalFileName?: true
    storedFileName?: true
    mimeType?: true
    status?: true
    totalRows?: true
    validRows?: true
    invalidRows?: true
    uploadedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileUploadMaxAggregateInputType = {
    id?: true
    originalFileName?: true
    storedFileName?: true
    mimeType?: true
    status?: true
    totalRows?: true
    validRows?: true
    invalidRows?: true
    uploadedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileUploadCountAggregateInputType = {
    id?: true
    originalFileName?: true
    storedFileName?: true
    mimeType?: true
    status?: true
    totalRows?: true
    validRows?: true
    invalidRows?: true
    warnings?: true
    uploadedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileUploadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUpload to aggregate.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileUploads
    **/
    _count?: true | FileUploadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileUploadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileUploadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileUploadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileUploadMaxAggregateInputType
  }

  export type GetFileUploadAggregateType<T extends FileUploadAggregateArgs> = {
        [P in keyof T & keyof AggregateFileUpload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileUpload[P]>
      : GetScalarType<T[P], AggregateFileUpload[P]>
  }




  export type FileUploadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadWhereInput
    orderBy?: FileUploadOrderByWithAggregationInput | FileUploadOrderByWithAggregationInput[]
    by: FileUploadScalarFieldEnum[] | FileUploadScalarFieldEnum
    having?: FileUploadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileUploadCountAggregateInputType | true
    _avg?: FileUploadAvgAggregateInputType
    _sum?: FileUploadSumAggregateInputType
    _min?: FileUploadMinAggregateInputType
    _max?: FileUploadMaxAggregateInputType
  }

  export type FileUploadGroupByOutputType = {
    id: string
    originalFileName: string
    storedFileName: string | null
    mimeType: string | null
    status: string
    totalRows: number
    validRows: number
    invalidRows: number
    warnings: JsonValue | null
    uploadedById: string | null
    createdAt: Date
    updatedAt: Date
    _count: FileUploadCountAggregateOutputType | null
    _avg: FileUploadAvgAggregateOutputType | null
    _sum: FileUploadSumAggregateOutputType | null
    _min: FileUploadMinAggregateOutputType | null
    _max: FileUploadMaxAggregateOutputType | null
  }

  type GetFileUploadGroupByPayload<T extends FileUploadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileUploadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileUploadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
            : GetScalarType<T[P], FileUploadGroupByOutputType[P]>
        }
      >
    >


  export type FileUploadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalFileName?: boolean
    storedFileName?: boolean
    mimeType?: boolean
    status?: boolean
    totalRows?: boolean
    validRows?: boolean
    invalidRows?: boolean
    warnings?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedBy?: boolean | FileUpload$uploadedByArgs<ExtArgs>
    reviews?: boolean | FileUpload$reviewsArgs<ExtArgs>
    errors?: boolean | FileUpload$errorsArgs<ExtArgs>
    _count?: boolean | FileUploadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalFileName?: boolean
    storedFileName?: boolean
    mimeType?: boolean
    status?: boolean
    totalRows?: boolean
    validRows?: boolean
    invalidRows?: boolean
    warnings?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedBy?: boolean | FileUpload$uploadedByArgs<ExtArgs>
  }, ExtArgs["result"]["fileUpload"]>

  export type FileUploadSelectScalar = {
    id?: boolean
    originalFileName?: boolean
    storedFileName?: boolean
    mimeType?: boolean
    status?: boolean
    totalRows?: boolean
    validRows?: boolean
    invalidRows?: boolean
    warnings?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileUploadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | FileUpload$uploadedByArgs<ExtArgs>
    reviews?: boolean | FileUpload$reviewsArgs<ExtArgs>
    errors?: boolean | FileUpload$errorsArgs<ExtArgs>
    _count?: boolean | FileUploadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileUploadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | FileUpload$uploadedByArgs<ExtArgs>
  }

  export type $FileUploadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileUpload"
    objects: {
      uploadedBy: Prisma.$UserPayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      errors: Prisma.$UploadErrorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalFileName: string
      storedFileName: string | null
      mimeType: string | null
      status: string
      totalRows: number
      validRows: number
      invalidRows: number
      warnings: Prisma.JsonValue | null
      uploadedById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileUpload"]>
    composites: {}
  }

  type FileUploadGetPayload<S extends boolean | null | undefined | FileUploadDefaultArgs> = $Result.GetResult<Prisma.$FileUploadPayload, S>

  type FileUploadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileUploadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileUploadCountAggregateInputType | true
    }

  export interface FileUploadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileUpload'], meta: { name: 'FileUpload' } }
    /**
     * Find zero or one FileUpload that matches the filter.
     * @param {FileUploadFindUniqueArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileUploadFindUniqueArgs>(args: SelectSubset<T, FileUploadFindUniqueArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FileUpload that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileUploadFindUniqueOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileUploadFindUniqueOrThrowArgs>(args: SelectSubset<T, FileUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FileUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileUploadFindFirstArgs>(args?: SelectSubset<T, FileUploadFindFirstArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FileUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileUploadFindFirstOrThrowArgs>(args?: SelectSubset<T, FileUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FileUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileUploads
     * const fileUploads = await prisma.fileUpload.findMany()
     * 
     * // Get first 10 FileUploads
     * const fileUploads = await prisma.fileUpload.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileUploadFindManyArgs>(args?: SelectSubset<T, FileUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FileUpload.
     * @param {FileUploadCreateArgs} args - Arguments to create a FileUpload.
     * @example
     * // Create one FileUpload
     * const FileUpload = await prisma.fileUpload.create({
     *   data: {
     *     // ... data to create a FileUpload
     *   }
     * })
     * 
     */
    create<T extends FileUploadCreateArgs>(args: SelectSubset<T, FileUploadCreateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FileUploads.
     * @param {FileUploadCreateManyArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileUploadCreateManyArgs>(args?: SelectSubset<T, FileUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileUploads and returns the data saved in the database.
     * @param {FileUploadCreateManyAndReturnArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileUploads and only return the `id`
     * const fileUploadWithIdOnly = await prisma.fileUpload.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileUploadCreateManyAndReturnArgs>(args?: SelectSubset<T, FileUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FileUpload.
     * @param {FileUploadDeleteArgs} args - Arguments to delete one FileUpload.
     * @example
     * // Delete one FileUpload
     * const FileUpload = await prisma.fileUpload.delete({
     *   where: {
     *     // ... filter to delete one FileUpload
     *   }
     * })
     * 
     */
    delete<T extends FileUploadDeleteArgs>(args: SelectSubset<T, FileUploadDeleteArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FileUpload.
     * @param {FileUploadUpdateArgs} args - Arguments to update one FileUpload.
     * @example
     * // Update one FileUpload
     * const fileUpload = await prisma.fileUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUploadUpdateArgs>(args: SelectSubset<T, FileUploadUpdateArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FileUploads.
     * @param {FileUploadDeleteManyArgs} args - Arguments to filter FileUploads to delete.
     * @example
     * // Delete a few FileUploads
     * const { count } = await prisma.fileUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileUploadDeleteManyArgs>(args?: SelectSubset<T, FileUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUploadUpdateManyArgs>(args: SelectSubset<T, FileUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FileUpload.
     * @param {FileUploadUpsertArgs} args - Arguments to update or create a FileUpload.
     * @example
     * // Update or create a FileUpload
     * const fileUpload = await prisma.fileUpload.upsert({
     *   create: {
     *     // ... data to create a FileUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileUpload we want to update
     *   }
     * })
     */
    upsert<T extends FileUploadUpsertArgs>(args: SelectSubset<T, FileUploadUpsertArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadCountArgs} args - Arguments to filter FileUploads to count.
     * @example
     * // Count the number of FileUploads
     * const count = await prisma.fileUpload.count({
     *   where: {
     *     // ... the filter for the FileUploads we want to count
     *   }
     * })
    **/
    count<T extends FileUploadCountArgs>(
      args?: Subset<T, FileUploadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileUploadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileUploadAggregateArgs>(args: Subset<T, FileUploadAggregateArgs>): Prisma.PrismaPromise<GetFileUploadAggregateType<T>>

    /**
     * Group by FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileUploadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileUploadGroupByArgs['orderBy'] }
        : { orderBy?: FileUploadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileUpload model
   */
  readonly fields: FileUploadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileUpload.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileUploadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedBy<T extends FileUpload$uploadedByArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$uploadedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    reviews<T extends FileUpload$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    errors<T extends FileUpload$errorsArgs<ExtArgs> = {}>(args?: Subset<T, FileUpload$errorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileUpload model
   */ 
  interface FileUploadFieldRefs {
    readonly id: FieldRef<"FileUpload", 'String'>
    readonly originalFileName: FieldRef<"FileUpload", 'String'>
    readonly storedFileName: FieldRef<"FileUpload", 'String'>
    readonly mimeType: FieldRef<"FileUpload", 'String'>
    readonly status: FieldRef<"FileUpload", 'String'>
    readonly totalRows: FieldRef<"FileUpload", 'Int'>
    readonly validRows: FieldRef<"FileUpload", 'Int'>
    readonly invalidRows: FieldRef<"FileUpload", 'Int'>
    readonly warnings: FieldRef<"FileUpload", 'Json'>
    readonly uploadedById: FieldRef<"FileUpload", 'String'>
    readonly createdAt: FieldRef<"FileUpload", 'DateTime'>
    readonly updatedAt: FieldRef<"FileUpload", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileUpload findUnique
   */
  export type FileUploadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findUniqueOrThrow
   */
  export type FileUploadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload findFirst
   */
  export type FileUploadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findFirstOrThrow
   */
  export type FileUploadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploads.
     */
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload findMany
   */
  export type FileUploadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter, which FileUploads to fetch.
     */
    where?: FileUploadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: FileUploadOrderByWithRelationInput | FileUploadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileUploads.
     */
    cursor?: FileUploadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploads.
     */
    skip?: number
    distinct?: FileUploadScalarFieldEnum | FileUploadScalarFieldEnum[]
  }

  /**
   * FileUpload create
   */
  export type FileUploadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to create a FileUpload.
     */
    data: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
  }

  /**
   * FileUpload createMany
   */
  export type FileUploadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileUpload createManyAndReturn
   */
  export type FileUploadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FileUploads.
     */
    data: FileUploadCreateManyInput | FileUploadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileUpload update
   */
  export type FileUploadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The data needed to update a FileUpload.
     */
    data: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
    /**
     * Choose, which FileUpload to update.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload updateMany
   */
  export type FileUploadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileUploads.
     */
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyInput>
    /**
     * Filter which FileUploads to update
     */
    where?: FileUploadWhereInput
  }

  /**
   * FileUpload upsert
   */
  export type FileUploadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * The filter to search for the FileUpload to update in case it exists.
     */
    where: FileUploadWhereUniqueInput
    /**
     * In case the FileUpload found by the `where` argument doesn't exist, create a new FileUpload with this data.
     */
    create: XOR<FileUploadCreateInput, FileUploadUncheckedCreateInput>
    /**
     * In case the FileUpload was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUploadUpdateInput, FileUploadUncheckedUpdateInput>
  }

  /**
   * FileUpload delete
   */
  export type FileUploadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    /**
     * Filter which FileUpload to delete.
     */
    where: FileUploadWhereUniqueInput
  }

  /**
   * FileUpload deleteMany
   */
  export type FileUploadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploads to delete
     */
    where?: FileUploadWhereInput
  }

  /**
   * FileUpload.uploadedBy
   */
  export type FileUpload$uploadedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * FileUpload.reviews
   */
  export type FileUpload$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * FileUpload.errors
   */
  export type FileUpload$errorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    where?: UploadErrorWhereInput
    orderBy?: UploadErrorOrderByWithRelationInput | UploadErrorOrderByWithRelationInput[]
    cursor?: UploadErrorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadErrorScalarFieldEnum | UploadErrorScalarFieldEnum[]
  }

  /**
   * FileUpload without action
   */
  export type FileUploadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    year: number | null
    npsScore: number | null
  }

  export type ReviewSumAggregateOutputType = {
    year: number | null
    npsScore: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    fileUploadId: string | null
    createdById: string | null
    sourceRecordId: string | null
    reviewDate: Date | null
    year: number | null
    quarter: string | null
    month: string | null
    source: string | null
    comment: string | null
    originalSentiment: string | null
    category: string | null
    subcategory: string | null
    product: string | null
    detail: string | null
    originalClassification: string | null
    npsScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    fileUploadId: string | null
    createdById: string | null
    sourceRecordId: string | null
    reviewDate: Date | null
    year: number | null
    quarter: string | null
    month: string | null
    source: string | null
    comment: string | null
    originalSentiment: string | null
    category: string | null
    subcategory: string | null
    product: string | null
    detail: string | null
    originalClassification: string | null
    npsScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    clientId: number
    fileUploadId: number
    createdById: number
    sourceRecordId: number
    reviewDate: number
    year: number
    quarter: number
    month: number
    source: number
    comment: number
    originalSentiment: number
    category: number
    subcategory: number
    product: number
    detail: number
    originalClassification: number
    npsScore: number
    rawData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    year?: true
    npsScore?: true
  }

  export type ReviewSumAggregateInputType = {
    year?: true
    npsScore?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    clientId?: true
    fileUploadId?: true
    createdById?: true
    sourceRecordId?: true
    reviewDate?: true
    year?: true
    quarter?: true
    month?: true
    source?: true
    comment?: true
    originalSentiment?: true
    category?: true
    subcategory?: true
    product?: true
    detail?: true
    originalClassification?: true
    npsScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    clientId?: true
    fileUploadId?: true
    createdById?: true
    sourceRecordId?: true
    reviewDate?: true
    year?: true
    quarter?: true
    month?: true
    source?: true
    comment?: true
    originalSentiment?: true
    category?: true
    subcategory?: true
    product?: true
    detail?: true
    originalClassification?: true
    npsScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    clientId?: true
    fileUploadId?: true
    createdById?: true
    sourceRecordId?: true
    reviewDate?: true
    year?: true
    quarter?: true
    month?: true
    source?: true
    comment?: true
    originalSentiment?: true
    category?: true
    subcategory?: true
    product?: true
    detail?: true
    originalClassification?: true
    npsScore?: true
    rawData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    clientId: string
    fileUploadId: string | null
    createdById: string | null
    sourceRecordId: string | null
    reviewDate: Date
    year: number | null
    quarter: string | null
    month: string | null
    source: string | null
    comment: string
    originalSentiment: string | null
    category: string
    subcategory: string
    product: string | null
    detail: string | null
    originalClassification: string
    npsScore: number | null
    rawData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    fileUploadId?: boolean
    createdById?: boolean
    sourceRecordId?: boolean
    reviewDate?: boolean
    year?: boolean
    quarter?: boolean
    month?: boolean
    source?: boolean
    comment?: boolean
    originalSentiment?: boolean
    category?: boolean
    subcategory?: boolean
    product?: boolean
    detail?: boolean
    originalClassification?: boolean
    npsScore?: boolean
    rawData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    fileUpload?: boolean | Review$fileUploadArgs<ExtArgs>
    createdBy?: boolean | Review$createdByArgs<ExtArgs>
    prediction?: boolean | Review$predictionArgs<ExtArgs>
    followUps?: boolean | Review$followUpsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    fileUploadId?: boolean
    createdById?: boolean
    sourceRecordId?: boolean
    reviewDate?: boolean
    year?: boolean
    quarter?: boolean
    month?: boolean
    source?: boolean
    comment?: boolean
    originalSentiment?: boolean
    category?: boolean
    subcategory?: boolean
    product?: boolean
    detail?: boolean
    originalClassification?: boolean
    npsScore?: boolean
    rawData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    fileUpload?: boolean | Review$fileUploadArgs<ExtArgs>
    createdBy?: boolean | Review$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    clientId?: boolean
    fileUploadId?: boolean
    createdById?: boolean
    sourceRecordId?: boolean
    reviewDate?: boolean
    year?: boolean
    quarter?: boolean
    month?: boolean
    source?: boolean
    comment?: boolean
    originalSentiment?: boolean
    category?: boolean
    subcategory?: boolean
    product?: boolean
    detail?: boolean
    originalClassification?: boolean
    npsScore?: boolean
    rawData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    fileUpload?: boolean | Review$fileUploadArgs<ExtArgs>
    createdBy?: boolean | Review$createdByArgs<ExtArgs>
    prediction?: boolean | Review$predictionArgs<ExtArgs>
    followUps?: boolean | Review$followUpsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    fileUpload?: boolean | Review$fileUploadArgs<ExtArgs>
    createdBy?: boolean | Review$createdByArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      fileUpload: Prisma.$FileUploadPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      prediction: Prisma.$PredictionPayload<ExtArgs> | null
      followUps: Prisma.$FollowUpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      fileUploadId: string | null
      createdById: string | null
      sourceRecordId: string | null
      reviewDate: Date
      year: number | null
      quarter: string | null
      month: string | null
      source: string | null
      comment: string
      originalSentiment: string | null
      category: string
      subcategory: string
      product: string | null
      detail: string | null
      originalClassification: string
      npsScore: number | null
      rawData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    fileUpload<T extends Review$fileUploadArgs<ExtArgs> = {}>(args?: Subset<T, Review$fileUploadArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    createdBy<T extends Review$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Review$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    prediction<T extends Review$predictionArgs<ExtArgs> = {}>(args?: Subset<T, Review$predictionArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    followUps<T extends Review$followUpsArgs<ExtArgs> = {}>(args?: Subset<T, Review$followUpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly clientId: FieldRef<"Review", 'String'>
    readonly fileUploadId: FieldRef<"Review", 'String'>
    readonly createdById: FieldRef<"Review", 'String'>
    readonly sourceRecordId: FieldRef<"Review", 'String'>
    readonly reviewDate: FieldRef<"Review", 'DateTime'>
    readonly year: FieldRef<"Review", 'Int'>
    readonly quarter: FieldRef<"Review", 'String'>
    readonly month: FieldRef<"Review", 'String'>
    readonly source: FieldRef<"Review", 'String'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly originalSentiment: FieldRef<"Review", 'String'>
    readonly category: FieldRef<"Review", 'String'>
    readonly subcategory: FieldRef<"Review", 'String'>
    readonly product: FieldRef<"Review", 'String'>
    readonly detail: FieldRef<"Review", 'String'>
    readonly originalClassification: FieldRef<"Review", 'String'>
    readonly npsScore: FieldRef<"Review", 'Int'>
    readonly rawData: FieldRef<"Review", 'Json'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review.fileUpload
   */
  export type Review$fileUploadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: FileUploadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileUploadInclude<ExtArgs> | null
    where?: FileUploadWhereInput
  }

  /**
   * Review.createdBy
   */
  export type Review$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review.prediction
   */
  export type Review$predictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
  }

  /**
   * Review.followUps
   */
  export type Review$followUpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    cursor?: FollowUpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Prediction
   */

  export type AggregatePrediction = {
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  export type PredictionAvgAggregateOutputType = {
    probability: number | null
  }

  export type PredictionSumAggregateOutputType = {
    probability: number | null
  }

  export type PredictionMinAggregateOutputType = {
    id: string | null
    reviewId: string | null
    riskLabel: $Enums.RiskLabel | null
    probability: number | null
    sentiment: $Enums.SentimentLabel | null
    primaryCause: string | null
    secondaryCause: string | null
    confidence: $Enums.ConfidenceLevel | null
    urgency: string | null
    recommendation: string | null
    explanation: string | null
    modelVersion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredictionMaxAggregateOutputType = {
    id: string | null
    reviewId: string | null
    riskLabel: $Enums.RiskLabel | null
    probability: number | null
    sentiment: $Enums.SentimentLabel | null
    primaryCause: string | null
    secondaryCause: string | null
    confidence: $Enums.ConfidenceLevel | null
    urgency: string | null
    recommendation: string | null
    explanation: string | null
    modelVersion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredictionCountAggregateOutputType = {
    id: number
    reviewId: number
    riskLabel: number
    probability: number
    sentiment: number
    primaryCause: number
    secondaryCause: number
    confidence: number
    urgency: number
    recommendation: number
    explanation: number
    detectedSignals: number
    warnings: number
    triggeredRules: number
    modelVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PredictionAvgAggregateInputType = {
    probability?: true
  }

  export type PredictionSumAggregateInputType = {
    probability?: true
  }

  export type PredictionMinAggregateInputType = {
    id?: true
    reviewId?: true
    riskLabel?: true
    probability?: true
    sentiment?: true
    primaryCause?: true
    secondaryCause?: true
    confidence?: true
    urgency?: true
    recommendation?: true
    explanation?: true
    modelVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredictionMaxAggregateInputType = {
    id?: true
    reviewId?: true
    riskLabel?: true
    probability?: true
    sentiment?: true
    primaryCause?: true
    secondaryCause?: true
    confidence?: true
    urgency?: true
    recommendation?: true
    explanation?: true
    modelVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredictionCountAggregateInputType = {
    id?: true
    reviewId?: true
    riskLabel?: true
    probability?: true
    sentiment?: true
    primaryCause?: true
    secondaryCause?: true
    confidence?: true
    urgency?: true
    recommendation?: true
    explanation?: true
    detectedSignals?: true
    warnings?: true
    triggeredRules?: true
    modelVersion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prediction to aggregate.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Predictions
    **/
    _count?: true | PredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionMaxAggregateInputType
  }

  export type GetPredictionAggregateType<T extends PredictionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediction[P]>
      : GetScalarType<T[P], AggregatePrediction[P]>
  }




  export type PredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithAggregationInput | PredictionOrderByWithAggregationInput[]
    by: PredictionScalarFieldEnum[] | PredictionScalarFieldEnum
    having?: PredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionCountAggregateInputType | true
    _avg?: PredictionAvgAggregateInputType
    _sum?: PredictionSumAggregateInputType
    _min?: PredictionMinAggregateInputType
    _max?: PredictionMaxAggregateInputType
  }

  export type PredictionGroupByOutputType = {
    id: string
    reviewId: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals: JsonValue | null
    warnings: JsonValue | null
    triggeredRules: JsonValue | null
    modelVersion: string | null
    createdAt: Date
    updatedAt: Date
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  type GetPredictionGroupByPayload<T extends PredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionGroupByOutputType[P]>
        }
      >
    >


  export type PredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    riskLabel?: boolean
    probability?: boolean
    sentiment?: boolean
    primaryCause?: boolean
    secondaryCause?: boolean
    confidence?: boolean
    urgency?: boolean
    recommendation?: boolean
    explanation?: boolean
    detectedSignals?: boolean
    warnings?: boolean
    triggeredRules?: boolean
    modelVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    humanCorrections?: boolean | Prediction$humanCorrectionsArgs<ExtArgs>
    recommendationFeedback?: boolean | Prediction$recommendationFeedbackArgs<ExtArgs>
    _count?: boolean | PredictionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    riskLabel?: boolean
    probability?: boolean
    sentiment?: boolean
    primaryCause?: boolean
    secondaryCause?: boolean
    confidence?: boolean
    urgency?: boolean
    recommendation?: boolean
    explanation?: boolean
    detectedSignals?: boolean
    warnings?: boolean
    triggeredRules?: boolean
    modelVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectScalar = {
    id?: boolean
    reviewId?: boolean
    riskLabel?: boolean
    probability?: boolean
    sentiment?: boolean
    primaryCause?: boolean
    secondaryCause?: boolean
    confidence?: boolean
    urgency?: boolean
    recommendation?: boolean
    explanation?: boolean
    detectedSignals?: boolean
    warnings?: boolean
    triggeredRules?: boolean
    modelVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    humanCorrections?: boolean | Prediction$humanCorrectionsArgs<ExtArgs>
    recommendationFeedback?: boolean | Prediction$recommendationFeedbackArgs<ExtArgs>
    _count?: boolean | PredictionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $PredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prediction"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
      humanCorrections: Prisma.$HumanCorrectionPayload<ExtArgs>[]
      recommendationFeedback: Prisma.$RecommendationFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewId: string
      riskLabel: $Enums.RiskLabel
      probability: number
      sentiment: $Enums.SentimentLabel
      primaryCause: string
      secondaryCause: string | null
      confidence: $Enums.ConfidenceLevel
      urgency: string
      recommendation: string
      explanation: string
      detectedSignals: Prisma.JsonValue | null
      warnings: Prisma.JsonValue | null
      triggeredRules: Prisma.JsonValue | null
      modelVersion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prediction"]>
    composites: {}
  }

  type PredictionGetPayload<S extends boolean | null | undefined | PredictionDefaultArgs> = $Result.GetResult<Prisma.$PredictionPayload, S>

  type PredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PredictionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PredictionCountAggregateInputType | true
    }

  export interface PredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prediction'], meta: { name: 'Prediction' } }
    /**
     * Find zero or one Prediction that matches the filter.
     * @param {PredictionFindUniqueArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionFindUniqueArgs>(args: SelectSubset<T, PredictionFindUniqueArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Prediction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PredictionFindUniqueOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Prediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionFindFirstArgs>(args?: SelectSubset<T, PredictionFindFirstArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Prediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Predictions
     * const predictions = await prisma.prediction.findMany()
     * 
     * // Get first 10 Predictions
     * const predictions = await prisma.prediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionWithIdOnly = await prisma.prediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionFindManyArgs>(args?: SelectSubset<T, PredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Prediction.
     * @param {PredictionCreateArgs} args - Arguments to create a Prediction.
     * @example
     * // Create one Prediction
     * const Prediction = await prisma.prediction.create({
     *   data: {
     *     // ... data to create a Prediction
     *   }
     * })
     * 
     */
    create<T extends PredictionCreateArgs>(args: SelectSubset<T, PredictionCreateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Predictions.
     * @param {PredictionCreateManyArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionCreateManyArgs>(args?: SelectSubset<T, PredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Predictions and returns the data saved in the database.
     * @param {PredictionCreateManyAndReturnArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Predictions and only return the `id`
     * const predictionWithIdOnly = await prisma.prediction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, PredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Prediction.
     * @param {PredictionDeleteArgs} args - Arguments to delete one Prediction.
     * @example
     * // Delete one Prediction
     * const Prediction = await prisma.prediction.delete({
     *   where: {
     *     // ... filter to delete one Prediction
     *   }
     * })
     * 
     */
    delete<T extends PredictionDeleteArgs>(args: SelectSubset<T, PredictionDeleteArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Prediction.
     * @param {PredictionUpdateArgs} args - Arguments to update one Prediction.
     * @example
     * // Update one Prediction
     * const prediction = await prisma.prediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionUpdateArgs>(args: SelectSubset<T, PredictionUpdateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Predictions.
     * @param {PredictionDeleteManyArgs} args - Arguments to filter Predictions to delete.
     * @example
     * // Delete a few Predictions
     * const { count } = await prisma.prediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionDeleteManyArgs>(args?: SelectSubset<T, PredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionUpdateManyArgs>(args: SelectSubset<T, PredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prediction.
     * @param {PredictionUpsertArgs} args - Arguments to update or create a Prediction.
     * @example
     * // Update or create a Prediction
     * const prediction = await prisma.prediction.upsert({
     *   create: {
     *     // ... data to create a Prediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prediction we want to update
     *   }
     * })
     */
    upsert<T extends PredictionUpsertArgs>(args: SelectSubset<T, PredictionUpsertArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionCountArgs} args - Arguments to filter Predictions to count.
     * @example
     * // Count the number of Predictions
     * const count = await prisma.prediction.count({
     *   where: {
     *     // ... the filter for the Predictions we want to count
     *   }
     * })
    **/
    count<T extends PredictionCountArgs>(
      args?: Subset<T, PredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PredictionAggregateArgs>(args: Subset<T, PredictionAggregateArgs>): Prisma.PrismaPromise<GetPredictionAggregateType<T>>

    /**
     * Group by Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionGroupByArgs['orderBy'] }
        : { orderBy?: PredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prediction model
   */
  readonly fields: PredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    humanCorrections<T extends Prediction$humanCorrectionsArgs<ExtArgs> = {}>(args?: Subset<T, Prediction$humanCorrectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "findMany"> | Null>
    recommendationFeedback<T extends Prediction$recommendationFeedbackArgs<ExtArgs> = {}>(args?: Subset<T, Prediction$recommendationFeedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prediction model
   */ 
  interface PredictionFieldRefs {
    readonly id: FieldRef<"Prediction", 'String'>
    readonly reviewId: FieldRef<"Prediction", 'String'>
    readonly riskLabel: FieldRef<"Prediction", 'RiskLabel'>
    readonly probability: FieldRef<"Prediction", 'Float'>
    readonly sentiment: FieldRef<"Prediction", 'SentimentLabel'>
    readonly primaryCause: FieldRef<"Prediction", 'String'>
    readonly secondaryCause: FieldRef<"Prediction", 'String'>
    readonly confidence: FieldRef<"Prediction", 'ConfidenceLevel'>
    readonly urgency: FieldRef<"Prediction", 'String'>
    readonly recommendation: FieldRef<"Prediction", 'String'>
    readonly explanation: FieldRef<"Prediction", 'String'>
    readonly detectedSignals: FieldRef<"Prediction", 'Json'>
    readonly warnings: FieldRef<"Prediction", 'Json'>
    readonly triggeredRules: FieldRef<"Prediction", 'Json'>
    readonly modelVersion: FieldRef<"Prediction", 'String'>
    readonly createdAt: FieldRef<"Prediction", 'DateTime'>
    readonly updatedAt: FieldRef<"Prediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prediction findUnique
   */
  export type PredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findUniqueOrThrow
   */
  export type PredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findFirst
   */
  export type PredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findFirstOrThrow
   */
  export type PredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findMany
   */
  export type PredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction create
   */
  export type PredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prediction.
     */
    data: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
  }

  /**
   * Prediction createMany
   */
  export type PredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prediction createManyAndReturn
   */
  export type PredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prediction update
   */
  export type PredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prediction.
     */
    data: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
    /**
     * Choose, which Prediction to update.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction updateMany
   */
  export type PredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
  }

  /**
   * Prediction upsert
   */
  export type PredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prediction to update in case it exists.
     */
    where: PredictionWhereUniqueInput
    /**
     * In case the Prediction found by the `where` argument doesn't exist, create a new Prediction with this data.
     */
    create: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
    /**
     * In case the Prediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
  }

  /**
   * Prediction delete
   */
  export type PredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter which Prediction to delete.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction deleteMany
   */
  export type PredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Predictions to delete
     */
    where?: PredictionWhereInput
  }

  /**
   * Prediction.humanCorrections
   */
  export type Prediction$humanCorrectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    where?: HumanCorrectionWhereInput
    orderBy?: HumanCorrectionOrderByWithRelationInput | HumanCorrectionOrderByWithRelationInput[]
    cursor?: HumanCorrectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HumanCorrectionScalarFieldEnum | HumanCorrectionScalarFieldEnum[]
  }

  /**
   * Prediction.recommendationFeedback
   */
  export type Prediction$recommendationFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    where?: RecommendationFeedbackWhereInput
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    cursor?: RecommendationFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationFeedbackScalarFieldEnum | RecommendationFeedbackScalarFieldEnum[]
  }

  /**
   * Prediction without action
   */
  export type PredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
  }


  /**
   * Model UploadError
   */

  export type AggregateUploadError = {
    _count: UploadErrorCountAggregateOutputType | null
    _avg: UploadErrorAvgAggregateOutputType | null
    _sum: UploadErrorSumAggregateOutputType | null
    _min: UploadErrorMinAggregateOutputType | null
    _max: UploadErrorMaxAggregateOutputType | null
  }

  export type UploadErrorAvgAggregateOutputType = {
    rowNumber: number | null
  }

  export type UploadErrorSumAggregateOutputType = {
    rowNumber: number | null
  }

  export type UploadErrorMinAggregateOutputType = {
    id: string | null
    fileUploadId: string | null
    rowNumber: number | null
    sourceRecordId: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadErrorMaxAggregateOutputType = {
    id: string | null
    fileUploadId: string | null
    rowNumber: number | null
    sourceRecordId: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadErrorCountAggregateOutputType = {
    id: number
    fileUploadId: number
    rowNumber: number
    sourceRecordId: number
    reason: number
    rawData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UploadErrorAvgAggregateInputType = {
    rowNumber?: true
  }

  export type UploadErrorSumAggregateInputType = {
    rowNumber?: true
  }

  export type UploadErrorMinAggregateInputType = {
    id?: true
    fileUploadId?: true
    rowNumber?: true
    sourceRecordId?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadErrorMaxAggregateInputType = {
    id?: true
    fileUploadId?: true
    rowNumber?: true
    sourceRecordId?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadErrorCountAggregateInputType = {
    id?: true
    fileUploadId?: true
    rowNumber?: true
    sourceRecordId?: true
    reason?: true
    rawData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UploadErrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadError to aggregate.
     */
    where?: UploadErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadErrors to fetch.
     */
    orderBy?: UploadErrorOrderByWithRelationInput | UploadErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadErrors
    **/
    _count?: true | UploadErrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadErrorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadErrorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadErrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadErrorMaxAggregateInputType
  }

  export type GetUploadErrorAggregateType<T extends UploadErrorAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadError]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadError[P]>
      : GetScalarType<T[P], AggregateUploadError[P]>
  }




  export type UploadErrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadErrorWhereInput
    orderBy?: UploadErrorOrderByWithAggregationInput | UploadErrorOrderByWithAggregationInput[]
    by: UploadErrorScalarFieldEnum[] | UploadErrorScalarFieldEnum
    having?: UploadErrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadErrorCountAggregateInputType | true
    _avg?: UploadErrorAvgAggregateInputType
    _sum?: UploadErrorSumAggregateInputType
    _min?: UploadErrorMinAggregateInputType
    _max?: UploadErrorMaxAggregateInputType
  }

  export type UploadErrorGroupByOutputType = {
    id: string
    fileUploadId: string
    rowNumber: number
    sourceRecordId: string | null
    reason: string
    rawData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UploadErrorCountAggregateOutputType | null
    _avg: UploadErrorAvgAggregateOutputType | null
    _sum: UploadErrorSumAggregateOutputType | null
    _min: UploadErrorMinAggregateOutputType | null
    _max: UploadErrorMaxAggregateOutputType | null
  }

  type GetUploadErrorGroupByPayload<T extends UploadErrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadErrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadErrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadErrorGroupByOutputType[P]>
            : GetScalarType<T[P], UploadErrorGroupByOutputType[P]>
        }
      >
    >


  export type UploadErrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUploadId?: boolean
    rowNumber?: boolean
    sourceRecordId?: boolean
    reason?: boolean
    rawData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileUpload?: boolean | FileUploadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadError"]>

  export type UploadErrorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUploadId?: boolean
    rowNumber?: boolean
    sourceRecordId?: boolean
    reason?: boolean
    rawData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fileUpload?: boolean | FileUploadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadError"]>

  export type UploadErrorSelectScalar = {
    id?: boolean
    fileUploadId?: boolean
    rowNumber?: boolean
    sourceRecordId?: boolean
    reason?: boolean
    rawData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UploadErrorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileUpload?: boolean | FileUploadDefaultArgs<ExtArgs>
  }
  export type UploadErrorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileUpload?: boolean | FileUploadDefaultArgs<ExtArgs>
  }

  export type $UploadErrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadError"
    objects: {
      fileUpload: Prisma.$FileUploadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileUploadId: string
      rowNumber: number
      sourceRecordId: string | null
      reason: string
      rawData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["uploadError"]>
    composites: {}
  }

  type UploadErrorGetPayload<S extends boolean | null | undefined | UploadErrorDefaultArgs> = $Result.GetResult<Prisma.$UploadErrorPayload, S>

  type UploadErrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UploadErrorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UploadErrorCountAggregateInputType | true
    }

  export interface UploadErrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadError'], meta: { name: 'UploadError' } }
    /**
     * Find zero or one UploadError that matches the filter.
     * @param {UploadErrorFindUniqueArgs} args - Arguments to find a UploadError
     * @example
     * // Get one UploadError
     * const uploadError = await prisma.uploadError.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadErrorFindUniqueArgs>(args: SelectSubset<T, UploadErrorFindUniqueArgs<ExtArgs>>): Prisma__UploadErrorClient<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UploadError that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UploadErrorFindUniqueOrThrowArgs} args - Arguments to find a UploadError
     * @example
     * // Get one UploadError
     * const uploadError = await prisma.uploadError.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadErrorFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadErrorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadErrorClient<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UploadError that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadErrorFindFirstArgs} args - Arguments to find a UploadError
     * @example
     * // Get one UploadError
     * const uploadError = await prisma.uploadError.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadErrorFindFirstArgs>(args?: SelectSubset<T, UploadErrorFindFirstArgs<ExtArgs>>): Prisma__UploadErrorClient<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UploadError that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadErrorFindFirstOrThrowArgs} args - Arguments to find a UploadError
     * @example
     * // Get one UploadError
     * const uploadError = await prisma.uploadError.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadErrorFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadErrorFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadErrorClient<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UploadErrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadErrorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadErrors
     * const uploadErrors = await prisma.uploadError.findMany()
     * 
     * // Get first 10 UploadErrors
     * const uploadErrors = await prisma.uploadError.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadErrorWithIdOnly = await prisma.uploadError.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadErrorFindManyArgs>(args?: SelectSubset<T, UploadErrorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UploadError.
     * @param {UploadErrorCreateArgs} args - Arguments to create a UploadError.
     * @example
     * // Create one UploadError
     * const UploadError = await prisma.uploadError.create({
     *   data: {
     *     // ... data to create a UploadError
     *   }
     * })
     * 
     */
    create<T extends UploadErrorCreateArgs>(args: SelectSubset<T, UploadErrorCreateArgs<ExtArgs>>): Prisma__UploadErrorClient<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UploadErrors.
     * @param {UploadErrorCreateManyArgs} args - Arguments to create many UploadErrors.
     * @example
     * // Create many UploadErrors
     * const uploadError = await prisma.uploadError.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadErrorCreateManyArgs>(args?: SelectSubset<T, UploadErrorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadErrors and returns the data saved in the database.
     * @param {UploadErrorCreateManyAndReturnArgs} args - Arguments to create many UploadErrors.
     * @example
     * // Create many UploadErrors
     * const uploadError = await prisma.uploadError.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadErrors and only return the `id`
     * const uploadErrorWithIdOnly = await prisma.uploadError.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadErrorCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadErrorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UploadError.
     * @param {UploadErrorDeleteArgs} args - Arguments to delete one UploadError.
     * @example
     * // Delete one UploadError
     * const UploadError = await prisma.uploadError.delete({
     *   where: {
     *     // ... filter to delete one UploadError
     *   }
     * })
     * 
     */
    delete<T extends UploadErrorDeleteArgs>(args: SelectSubset<T, UploadErrorDeleteArgs<ExtArgs>>): Prisma__UploadErrorClient<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UploadError.
     * @param {UploadErrorUpdateArgs} args - Arguments to update one UploadError.
     * @example
     * // Update one UploadError
     * const uploadError = await prisma.uploadError.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadErrorUpdateArgs>(args: SelectSubset<T, UploadErrorUpdateArgs<ExtArgs>>): Prisma__UploadErrorClient<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UploadErrors.
     * @param {UploadErrorDeleteManyArgs} args - Arguments to filter UploadErrors to delete.
     * @example
     * // Delete a few UploadErrors
     * const { count } = await prisma.uploadError.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadErrorDeleteManyArgs>(args?: SelectSubset<T, UploadErrorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadErrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadErrors
     * const uploadError = await prisma.uploadError.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadErrorUpdateManyArgs>(args: SelectSubset<T, UploadErrorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UploadError.
     * @param {UploadErrorUpsertArgs} args - Arguments to update or create a UploadError.
     * @example
     * // Update or create a UploadError
     * const uploadError = await prisma.uploadError.upsert({
     *   create: {
     *     // ... data to create a UploadError
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadError we want to update
     *   }
     * })
     */
    upsert<T extends UploadErrorUpsertArgs>(args: SelectSubset<T, UploadErrorUpsertArgs<ExtArgs>>): Prisma__UploadErrorClient<$Result.GetResult<Prisma.$UploadErrorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UploadErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadErrorCountArgs} args - Arguments to filter UploadErrors to count.
     * @example
     * // Count the number of UploadErrors
     * const count = await prisma.uploadError.count({
     *   where: {
     *     // ... the filter for the UploadErrors we want to count
     *   }
     * })
    **/
    count<T extends UploadErrorCountArgs>(
      args?: Subset<T, UploadErrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadErrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadError.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadErrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadErrorAggregateArgs>(args: Subset<T, UploadErrorAggregateArgs>): Prisma.PrismaPromise<GetUploadErrorAggregateType<T>>

    /**
     * Group by UploadError.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadErrorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadErrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadErrorGroupByArgs['orderBy'] }
        : { orderBy?: UploadErrorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadErrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadErrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadError model
   */
  readonly fields: UploadErrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadError.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadErrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fileUpload<T extends FileUploadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileUploadDefaultArgs<ExtArgs>>): Prisma__FileUploadClient<$Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadError model
   */ 
  interface UploadErrorFieldRefs {
    readonly id: FieldRef<"UploadError", 'String'>
    readonly fileUploadId: FieldRef<"UploadError", 'String'>
    readonly rowNumber: FieldRef<"UploadError", 'Int'>
    readonly sourceRecordId: FieldRef<"UploadError", 'String'>
    readonly reason: FieldRef<"UploadError", 'String'>
    readonly rawData: FieldRef<"UploadError", 'Json'>
    readonly createdAt: FieldRef<"UploadError", 'DateTime'>
    readonly updatedAt: FieldRef<"UploadError", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadError findUnique
   */
  export type UploadErrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * Filter, which UploadError to fetch.
     */
    where: UploadErrorWhereUniqueInput
  }

  /**
   * UploadError findUniqueOrThrow
   */
  export type UploadErrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * Filter, which UploadError to fetch.
     */
    where: UploadErrorWhereUniqueInput
  }

  /**
   * UploadError findFirst
   */
  export type UploadErrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * Filter, which UploadError to fetch.
     */
    where?: UploadErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadErrors to fetch.
     */
    orderBy?: UploadErrorOrderByWithRelationInput | UploadErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadErrors.
     */
    cursor?: UploadErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadErrors.
     */
    distinct?: UploadErrorScalarFieldEnum | UploadErrorScalarFieldEnum[]
  }

  /**
   * UploadError findFirstOrThrow
   */
  export type UploadErrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * Filter, which UploadError to fetch.
     */
    where?: UploadErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadErrors to fetch.
     */
    orderBy?: UploadErrorOrderByWithRelationInput | UploadErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadErrors.
     */
    cursor?: UploadErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadErrors.
     */
    distinct?: UploadErrorScalarFieldEnum | UploadErrorScalarFieldEnum[]
  }

  /**
   * UploadError findMany
   */
  export type UploadErrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * Filter, which UploadErrors to fetch.
     */
    where?: UploadErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadErrors to fetch.
     */
    orderBy?: UploadErrorOrderByWithRelationInput | UploadErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadErrors.
     */
    cursor?: UploadErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadErrors.
     */
    skip?: number
    distinct?: UploadErrorScalarFieldEnum | UploadErrorScalarFieldEnum[]
  }

  /**
   * UploadError create
   */
  export type UploadErrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadError.
     */
    data: XOR<UploadErrorCreateInput, UploadErrorUncheckedCreateInput>
  }

  /**
   * UploadError createMany
   */
  export type UploadErrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadErrors.
     */
    data: UploadErrorCreateManyInput | UploadErrorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadError createManyAndReturn
   */
  export type UploadErrorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UploadErrors.
     */
    data: UploadErrorCreateManyInput | UploadErrorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadError update
   */
  export type UploadErrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadError.
     */
    data: XOR<UploadErrorUpdateInput, UploadErrorUncheckedUpdateInput>
    /**
     * Choose, which UploadError to update.
     */
    where: UploadErrorWhereUniqueInput
  }

  /**
   * UploadError updateMany
   */
  export type UploadErrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadErrors.
     */
    data: XOR<UploadErrorUpdateManyMutationInput, UploadErrorUncheckedUpdateManyInput>
    /**
     * Filter which UploadErrors to update
     */
    where?: UploadErrorWhereInput
  }

  /**
   * UploadError upsert
   */
  export type UploadErrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadError to update in case it exists.
     */
    where: UploadErrorWhereUniqueInput
    /**
     * In case the UploadError found by the `where` argument doesn't exist, create a new UploadError with this data.
     */
    create: XOR<UploadErrorCreateInput, UploadErrorUncheckedCreateInput>
    /**
     * In case the UploadError was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadErrorUpdateInput, UploadErrorUncheckedUpdateInput>
  }

  /**
   * UploadError delete
   */
  export type UploadErrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
    /**
     * Filter which UploadError to delete.
     */
    where: UploadErrorWhereUniqueInput
  }

  /**
   * UploadError deleteMany
   */
  export type UploadErrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadErrors to delete
     */
    where?: UploadErrorWhereInput
  }

  /**
   * UploadError without action
   */
  export type UploadErrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadError
     */
    select?: UploadErrorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadErrorInclude<ExtArgs> | null
  }


  /**
   * Model HumanCorrection
   */

  export type AggregateHumanCorrection = {
    _count: HumanCorrectionCountAggregateOutputType | null
    _min: HumanCorrectionMinAggregateOutputType | null
    _max: HumanCorrectionMaxAggregateOutputType | null
  }

  export type HumanCorrectionMinAggregateOutputType = {
    id: string | null
    predictionId: string | null
    correctedById: string | null
    originalRiskLabel: $Enums.RiskLabel | null
    correctedRiskLabel: $Enums.RiskLabel | null
    originalSentiment: $Enums.SentimentLabel | null
    correctedSentiment: $Enums.SentimentLabel | null
    originalPrimaryCause: string | null
    correctedPrimaryCause: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HumanCorrectionMaxAggregateOutputType = {
    id: string | null
    predictionId: string | null
    correctedById: string | null
    originalRiskLabel: $Enums.RiskLabel | null
    correctedRiskLabel: $Enums.RiskLabel | null
    originalSentiment: $Enums.SentimentLabel | null
    correctedSentiment: $Enums.SentimentLabel | null
    originalPrimaryCause: string | null
    correctedPrimaryCause: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HumanCorrectionCountAggregateOutputType = {
    id: number
    predictionId: number
    correctedById: number
    originalRiskLabel: number
    correctedRiskLabel: number
    originalSentiment: number
    correctedSentiment: number
    originalPrimaryCause: number
    correctedPrimaryCause: number
    reason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HumanCorrectionMinAggregateInputType = {
    id?: true
    predictionId?: true
    correctedById?: true
    originalRiskLabel?: true
    correctedRiskLabel?: true
    originalSentiment?: true
    correctedSentiment?: true
    originalPrimaryCause?: true
    correctedPrimaryCause?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HumanCorrectionMaxAggregateInputType = {
    id?: true
    predictionId?: true
    correctedById?: true
    originalRiskLabel?: true
    correctedRiskLabel?: true
    originalSentiment?: true
    correctedSentiment?: true
    originalPrimaryCause?: true
    correctedPrimaryCause?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HumanCorrectionCountAggregateInputType = {
    id?: true
    predictionId?: true
    correctedById?: true
    originalRiskLabel?: true
    correctedRiskLabel?: true
    originalSentiment?: true
    correctedSentiment?: true
    originalPrimaryCause?: true
    correctedPrimaryCause?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HumanCorrectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HumanCorrection to aggregate.
     */
    where?: HumanCorrectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumanCorrections to fetch.
     */
    orderBy?: HumanCorrectionOrderByWithRelationInput | HumanCorrectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HumanCorrectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumanCorrections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumanCorrections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HumanCorrections
    **/
    _count?: true | HumanCorrectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HumanCorrectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HumanCorrectionMaxAggregateInputType
  }

  export type GetHumanCorrectionAggregateType<T extends HumanCorrectionAggregateArgs> = {
        [P in keyof T & keyof AggregateHumanCorrection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHumanCorrection[P]>
      : GetScalarType<T[P], AggregateHumanCorrection[P]>
  }




  export type HumanCorrectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HumanCorrectionWhereInput
    orderBy?: HumanCorrectionOrderByWithAggregationInput | HumanCorrectionOrderByWithAggregationInput[]
    by: HumanCorrectionScalarFieldEnum[] | HumanCorrectionScalarFieldEnum
    having?: HumanCorrectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HumanCorrectionCountAggregateInputType | true
    _min?: HumanCorrectionMinAggregateInputType
    _max?: HumanCorrectionMaxAggregateInputType
  }

  export type HumanCorrectionGroupByOutputType = {
    id: string
    predictionId: string
    correctedById: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment: $Enums.SentimentLabel | null
    correctedSentiment: $Enums.SentimentLabel | null
    originalPrimaryCause: string | null
    correctedPrimaryCause: string | null
    reason: string | null
    createdAt: Date
    updatedAt: Date
    _count: HumanCorrectionCountAggregateOutputType | null
    _min: HumanCorrectionMinAggregateOutputType | null
    _max: HumanCorrectionMaxAggregateOutputType | null
  }

  type GetHumanCorrectionGroupByPayload<T extends HumanCorrectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HumanCorrectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HumanCorrectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HumanCorrectionGroupByOutputType[P]>
            : GetScalarType<T[P], HumanCorrectionGroupByOutputType[P]>
        }
      >
    >


  export type HumanCorrectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictionId?: boolean
    correctedById?: boolean
    originalRiskLabel?: boolean
    correctedRiskLabel?: boolean
    originalSentiment?: boolean
    correctedSentiment?: boolean
    originalPrimaryCause?: boolean
    correctedPrimaryCause?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    correctedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["humanCorrection"]>

  export type HumanCorrectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictionId?: boolean
    correctedById?: boolean
    originalRiskLabel?: boolean
    correctedRiskLabel?: boolean
    originalSentiment?: boolean
    correctedSentiment?: boolean
    originalPrimaryCause?: boolean
    correctedPrimaryCause?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    correctedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["humanCorrection"]>

  export type HumanCorrectionSelectScalar = {
    id?: boolean
    predictionId?: boolean
    correctedById?: boolean
    originalRiskLabel?: boolean
    correctedRiskLabel?: boolean
    originalSentiment?: boolean
    correctedSentiment?: boolean
    originalPrimaryCause?: boolean
    correctedPrimaryCause?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HumanCorrectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    correctedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HumanCorrectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    correctedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HumanCorrectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HumanCorrection"
    objects: {
      prediction: Prisma.$PredictionPayload<ExtArgs>
      correctedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      predictionId: string
      correctedById: string
      originalRiskLabel: $Enums.RiskLabel
      correctedRiskLabel: $Enums.RiskLabel
      originalSentiment: $Enums.SentimentLabel | null
      correctedSentiment: $Enums.SentimentLabel | null
      originalPrimaryCause: string | null
      correctedPrimaryCause: string | null
      reason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["humanCorrection"]>
    composites: {}
  }

  type HumanCorrectionGetPayload<S extends boolean | null | undefined | HumanCorrectionDefaultArgs> = $Result.GetResult<Prisma.$HumanCorrectionPayload, S>

  type HumanCorrectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HumanCorrectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HumanCorrectionCountAggregateInputType | true
    }

  export interface HumanCorrectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HumanCorrection'], meta: { name: 'HumanCorrection' } }
    /**
     * Find zero or one HumanCorrection that matches the filter.
     * @param {HumanCorrectionFindUniqueArgs} args - Arguments to find a HumanCorrection
     * @example
     * // Get one HumanCorrection
     * const humanCorrection = await prisma.humanCorrection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HumanCorrectionFindUniqueArgs>(args: SelectSubset<T, HumanCorrectionFindUniqueArgs<ExtArgs>>): Prisma__HumanCorrectionClient<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HumanCorrection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HumanCorrectionFindUniqueOrThrowArgs} args - Arguments to find a HumanCorrection
     * @example
     * // Get one HumanCorrection
     * const humanCorrection = await prisma.humanCorrection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HumanCorrectionFindUniqueOrThrowArgs>(args: SelectSubset<T, HumanCorrectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HumanCorrectionClient<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HumanCorrection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanCorrectionFindFirstArgs} args - Arguments to find a HumanCorrection
     * @example
     * // Get one HumanCorrection
     * const humanCorrection = await prisma.humanCorrection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HumanCorrectionFindFirstArgs>(args?: SelectSubset<T, HumanCorrectionFindFirstArgs<ExtArgs>>): Prisma__HumanCorrectionClient<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HumanCorrection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanCorrectionFindFirstOrThrowArgs} args - Arguments to find a HumanCorrection
     * @example
     * // Get one HumanCorrection
     * const humanCorrection = await prisma.humanCorrection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HumanCorrectionFindFirstOrThrowArgs>(args?: SelectSubset<T, HumanCorrectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HumanCorrectionClient<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HumanCorrections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanCorrectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HumanCorrections
     * const humanCorrections = await prisma.humanCorrection.findMany()
     * 
     * // Get first 10 HumanCorrections
     * const humanCorrections = await prisma.humanCorrection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const humanCorrectionWithIdOnly = await prisma.humanCorrection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HumanCorrectionFindManyArgs>(args?: SelectSubset<T, HumanCorrectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HumanCorrection.
     * @param {HumanCorrectionCreateArgs} args - Arguments to create a HumanCorrection.
     * @example
     * // Create one HumanCorrection
     * const HumanCorrection = await prisma.humanCorrection.create({
     *   data: {
     *     // ... data to create a HumanCorrection
     *   }
     * })
     * 
     */
    create<T extends HumanCorrectionCreateArgs>(args: SelectSubset<T, HumanCorrectionCreateArgs<ExtArgs>>): Prisma__HumanCorrectionClient<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HumanCorrections.
     * @param {HumanCorrectionCreateManyArgs} args - Arguments to create many HumanCorrections.
     * @example
     * // Create many HumanCorrections
     * const humanCorrection = await prisma.humanCorrection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HumanCorrectionCreateManyArgs>(args?: SelectSubset<T, HumanCorrectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HumanCorrections and returns the data saved in the database.
     * @param {HumanCorrectionCreateManyAndReturnArgs} args - Arguments to create many HumanCorrections.
     * @example
     * // Create many HumanCorrections
     * const humanCorrection = await prisma.humanCorrection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HumanCorrections and only return the `id`
     * const humanCorrectionWithIdOnly = await prisma.humanCorrection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HumanCorrectionCreateManyAndReturnArgs>(args?: SelectSubset<T, HumanCorrectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HumanCorrection.
     * @param {HumanCorrectionDeleteArgs} args - Arguments to delete one HumanCorrection.
     * @example
     * // Delete one HumanCorrection
     * const HumanCorrection = await prisma.humanCorrection.delete({
     *   where: {
     *     // ... filter to delete one HumanCorrection
     *   }
     * })
     * 
     */
    delete<T extends HumanCorrectionDeleteArgs>(args: SelectSubset<T, HumanCorrectionDeleteArgs<ExtArgs>>): Prisma__HumanCorrectionClient<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HumanCorrection.
     * @param {HumanCorrectionUpdateArgs} args - Arguments to update one HumanCorrection.
     * @example
     * // Update one HumanCorrection
     * const humanCorrection = await prisma.humanCorrection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HumanCorrectionUpdateArgs>(args: SelectSubset<T, HumanCorrectionUpdateArgs<ExtArgs>>): Prisma__HumanCorrectionClient<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HumanCorrections.
     * @param {HumanCorrectionDeleteManyArgs} args - Arguments to filter HumanCorrections to delete.
     * @example
     * // Delete a few HumanCorrections
     * const { count } = await prisma.humanCorrection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HumanCorrectionDeleteManyArgs>(args?: SelectSubset<T, HumanCorrectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HumanCorrections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanCorrectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HumanCorrections
     * const humanCorrection = await prisma.humanCorrection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HumanCorrectionUpdateManyArgs>(args: SelectSubset<T, HumanCorrectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HumanCorrection.
     * @param {HumanCorrectionUpsertArgs} args - Arguments to update or create a HumanCorrection.
     * @example
     * // Update or create a HumanCorrection
     * const humanCorrection = await prisma.humanCorrection.upsert({
     *   create: {
     *     // ... data to create a HumanCorrection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HumanCorrection we want to update
     *   }
     * })
     */
    upsert<T extends HumanCorrectionUpsertArgs>(args: SelectSubset<T, HumanCorrectionUpsertArgs<ExtArgs>>): Prisma__HumanCorrectionClient<$Result.GetResult<Prisma.$HumanCorrectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HumanCorrections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanCorrectionCountArgs} args - Arguments to filter HumanCorrections to count.
     * @example
     * // Count the number of HumanCorrections
     * const count = await prisma.humanCorrection.count({
     *   where: {
     *     // ... the filter for the HumanCorrections we want to count
     *   }
     * })
    **/
    count<T extends HumanCorrectionCountArgs>(
      args?: Subset<T, HumanCorrectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HumanCorrectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HumanCorrection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanCorrectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HumanCorrectionAggregateArgs>(args: Subset<T, HumanCorrectionAggregateArgs>): Prisma.PrismaPromise<GetHumanCorrectionAggregateType<T>>

    /**
     * Group by HumanCorrection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanCorrectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HumanCorrectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HumanCorrectionGroupByArgs['orderBy'] }
        : { orderBy?: HumanCorrectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HumanCorrectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHumanCorrectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HumanCorrection model
   */
  readonly fields: HumanCorrectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HumanCorrection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HumanCorrectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prediction<T extends PredictionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PredictionDefaultArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    correctedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HumanCorrection model
   */ 
  interface HumanCorrectionFieldRefs {
    readonly id: FieldRef<"HumanCorrection", 'String'>
    readonly predictionId: FieldRef<"HumanCorrection", 'String'>
    readonly correctedById: FieldRef<"HumanCorrection", 'String'>
    readonly originalRiskLabel: FieldRef<"HumanCorrection", 'RiskLabel'>
    readonly correctedRiskLabel: FieldRef<"HumanCorrection", 'RiskLabel'>
    readonly originalSentiment: FieldRef<"HumanCorrection", 'SentimentLabel'>
    readonly correctedSentiment: FieldRef<"HumanCorrection", 'SentimentLabel'>
    readonly originalPrimaryCause: FieldRef<"HumanCorrection", 'String'>
    readonly correctedPrimaryCause: FieldRef<"HumanCorrection", 'String'>
    readonly reason: FieldRef<"HumanCorrection", 'String'>
    readonly createdAt: FieldRef<"HumanCorrection", 'DateTime'>
    readonly updatedAt: FieldRef<"HumanCorrection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HumanCorrection findUnique
   */
  export type HumanCorrectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which HumanCorrection to fetch.
     */
    where: HumanCorrectionWhereUniqueInput
  }

  /**
   * HumanCorrection findUniqueOrThrow
   */
  export type HumanCorrectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which HumanCorrection to fetch.
     */
    where: HumanCorrectionWhereUniqueInput
  }

  /**
   * HumanCorrection findFirst
   */
  export type HumanCorrectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which HumanCorrection to fetch.
     */
    where?: HumanCorrectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumanCorrections to fetch.
     */
    orderBy?: HumanCorrectionOrderByWithRelationInput | HumanCorrectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HumanCorrections.
     */
    cursor?: HumanCorrectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumanCorrections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumanCorrections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HumanCorrections.
     */
    distinct?: HumanCorrectionScalarFieldEnum | HumanCorrectionScalarFieldEnum[]
  }

  /**
   * HumanCorrection findFirstOrThrow
   */
  export type HumanCorrectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which HumanCorrection to fetch.
     */
    where?: HumanCorrectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumanCorrections to fetch.
     */
    orderBy?: HumanCorrectionOrderByWithRelationInput | HumanCorrectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HumanCorrections.
     */
    cursor?: HumanCorrectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumanCorrections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumanCorrections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HumanCorrections.
     */
    distinct?: HumanCorrectionScalarFieldEnum | HumanCorrectionScalarFieldEnum[]
  }

  /**
   * HumanCorrection findMany
   */
  export type HumanCorrectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * Filter, which HumanCorrections to fetch.
     */
    where?: HumanCorrectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumanCorrections to fetch.
     */
    orderBy?: HumanCorrectionOrderByWithRelationInput | HumanCorrectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HumanCorrections.
     */
    cursor?: HumanCorrectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumanCorrections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumanCorrections.
     */
    skip?: number
    distinct?: HumanCorrectionScalarFieldEnum | HumanCorrectionScalarFieldEnum[]
  }

  /**
   * HumanCorrection create
   */
  export type HumanCorrectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * The data needed to create a HumanCorrection.
     */
    data: XOR<HumanCorrectionCreateInput, HumanCorrectionUncheckedCreateInput>
  }

  /**
   * HumanCorrection createMany
   */
  export type HumanCorrectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HumanCorrections.
     */
    data: HumanCorrectionCreateManyInput | HumanCorrectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HumanCorrection createManyAndReturn
   */
  export type HumanCorrectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HumanCorrections.
     */
    data: HumanCorrectionCreateManyInput | HumanCorrectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HumanCorrection update
   */
  export type HumanCorrectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * The data needed to update a HumanCorrection.
     */
    data: XOR<HumanCorrectionUpdateInput, HumanCorrectionUncheckedUpdateInput>
    /**
     * Choose, which HumanCorrection to update.
     */
    where: HumanCorrectionWhereUniqueInput
  }

  /**
   * HumanCorrection updateMany
   */
  export type HumanCorrectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HumanCorrections.
     */
    data: XOR<HumanCorrectionUpdateManyMutationInput, HumanCorrectionUncheckedUpdateManyInput>
    /**
     * Filter which HumanCorrections to update
     */
    where?: HumanCorrectionWhereInput
  }

  /**
   * HumanCorrection upsert
   */
  export type HumanCorrectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * The filter to search for the HumanCorrection to update in case it exists.
     */
    where: HumanCorrectionWhereUniqueInput
    /**
     * In case the HumanCorrection found by the `where` argument doesn't exist, create a new HumanCorrection with this data.
     */
    create: XOR<HumanCorrectionCreateInput, HumanCorrectionUncheckedCreateInput>
    /**
     * In case the HumanCorrection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HumanCorrectionUpdateInput, HumanCorrectionUncheckedUpdateInput>
  }

  /**
   * HumanCorrection delete
   */
  export type HumanCorrectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
    /**
     * Filter which HumanCorrection to delete.
     */
    where: HumanCorrectionWhereUniqueInput
  }

  /**
   * HumanCorrection deleteMany
   */
  export type HumanCorrectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HumanCorrections to delete
     */
    where?: HumanCorrectionWhereInput
  }

  /**
   * HumanCorrection without action
   */
  export type HumanCorrectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanCorrection
     */
    select?: HumanCorrectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanCorrectionInclude<ExtArgs> | null
  }


  /**
   * Model RecommendationFeedback
   */

  export type AggregateRecommendationFeedback = {
    _count: RecommendationFeedbackCountAggregateOutputType | null
    _min: RecommendationFeedbackMinAggregateOutputType | null
    _max: RecommendationFeedbackMaxAggregateOutputType | null
  }

  export type RecommendationFeedbackMinAggregateOutputType = {
    id: string | null
    predictionId: string | null
    userId: string | null
    isUseful: boolean | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationFeedbackMaxAggregateOutputType = {
    id: string | null
    predictionId: string | null
    userId: string | null
    isUseful: boolean | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationFeedbackCountAggregateOutputType = {
    id: number
    predictionId: number
    userId: number
    isUseful: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecommendationFeedbackMinAggregateInputType = {
    id?: true
    predictionId?: true
    userId?: true
    isUseful?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecommendationFeedbackMaxAggregateInputType = {
    id?: true
    predictionId?: true
    userId?: true
    isUseful?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecommendationFeedbackCountAggregateInputType = {
    id?: true
    predictionId?: true
    userId?: true
    isUseful?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecommendationFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationFeedback to aggregate.
     */
    where?: RecommendationFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationFeedbacks to fetch.
     */
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecommendationFeedbacks
    **/
    _count?: true | RecommendationFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationFeedbackMaxAggregateInputType
  }

  export type GetRecommendationFeedbackAggregateType<T extends RecommendationFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendationFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendationFeedback[P]>
      : GetScalarType<T[P], AggregateRecommendationFeedback[P]>
  }




  export type RecommendationFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationFeedbackWhereInput
    orderBy?: RecommendationFeedbackOrderByWithAggregationInput | RecommendationFeedbackOrderByWithAggregationInput[]
    by: RecommendationFeedbackScalarFieldEnum[] | RecommendationFeedbackScalarFieldEnum
    having?: RecommendationFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationFeedbackCountAggregateInputType | true
    _min?: RecommendationFeedbackMinAggregateInputType
    _max?: RecommendationFeedbackMaxAggregateInputType
  }

  export type RecommendationFeedbackGroupByOutputType = {
    id: string
    predictionId: string
    userId: string
    isUseful: boolean
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: RecommendationFeedbackCountAggregateOutputType | null
    _min: RecommendationFeedbackMinAggregateOutputType | null
    _max: RecommendationFeedbackMaxAggregateOutputType | null
  }

  type GetRecommendationFeedbackGroupByPayload<T extends RecommendationFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictionId?: boolean
    userId?: boolean
    isUseful?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationFeedback"]>

  export type RecommendationFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictionId?: boolean
    userId?: boolean
    isUseful?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationFeedback"]>

  export type RecommendationFeedbackSelectScalar = {
    id?: boolean
    predictionId?: boolean
    userId?: boolean
    isUseful?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecommendationFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendationFeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prediction?: boolean | PredictionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecommendationFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecommendationFeedback"
    objects: {
      prediction: Prisma.$PredictionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      predictionId: string
      userId: string
      isUseful: boolean
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recommendationFeedback"]>
    composites: {}
  }

  type RecommendationFeedbackGetPayload<S extends boolean | null | undefined | RecommendationFeedbackDefaultArgs> = $Result.GetResult<Prisma.$RecommendationFeedbackPayload, S>

  type RecommendationFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecommendationFeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecommendationFeedbackCountAggregateInputType | true
    }

  export interface RecommendationFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecommendationFeedback'], meta: { name: 'RecommendationFeedback' } }
    /**
     * Find zero or one RecommendationFeedback that matches the filter.
     * @param {RecommendationFeedbackFindUniqueArgs} args - Arguments to find a RecommendationFeedback
     * @example
     * // Get one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFeedbackFindUniqueArgs>(args: SelectSubset<T, RecommendationFeedbackFindUniqueArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RecommendationFeedback that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecommendationFeedbackFindUniqueOrThrowArgs} args - Arguments to find a RecommendationFeedback
     * @example
     * // Get one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RecommendationFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackFindFirstArgs} args - Arguments to find a RecommendationFeedback
     * @example
     * // Get one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFeedbackFindFirstArgs>(args?: SelectSubset<T, RecommendationFeedbackFindFirstArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RecommendationFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackFindFirstOrThrowArgs} args - Arguments to find a RecommendationFeedback
     * @example
     * // Get one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RecommendationFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecommendationFeedbacks
     * const recommendationFeedbacks = await prisma.recommendationFeedback.findMany()
     * 
     * // Get first 10 RecommendationFeedbacks
     * const recommendationFeedbacks = await prisma.recommendationFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationFeedbackWithIdOnly = await prisma.recommendationFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFeedbackFindManyArgs>(args?: SelectSubset<T, RecommendationFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RecommendationFeedback.
     * @param {RecommendationFeedbackCreateArgs} args - Arguments to create a RecommendationFeedback.
     * @example
     * // Create one RecommendationFeedback
     * const RecommendationFeedback = await prisma.recommendationFeedback.create({
     *   data: {
     *     // ... data to create a RecommendationFeedback
     *   }
     * })
     * 
     */
    create<T extends RecommendationFeedbackCreateArgs>(args: SelectSubset<T, RecommendationFeedbackCreateArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RecommendationFeedbacks.
     * @param {RecommendationFeedbackCreateManyArgs} args - Arguments to create many RecommendationFeedbacks.
     * @example
     * // Create many RecommendationFeedbacks
     * const recommendationFeedback = await prisma.recommendationFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationFeedbackCreateManyArgs>(args?: SelectSubset<T, RecommendationFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecommendationFeedbacks and returns the data saved in the database.
     * @param {RecommendationFeedbackCreateManyAndReturnArgs} args - Arguments to create many RecommendationFeedbacks.
     * @example
     * // Create many RecommendationFeedbacks
     * const recommendationFeedback = await prisma.recommendationFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecommendationFeedbacks and only return the `id`
     * const recommendationFeedbackWithIdOnly = await prisma.recommendationFeedback.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RecommendationFeedback.
     * @param {RecommendationFeedbackDeleteArgs} args - Arguments to delete one RecommendationFeedback.
     * @example
     * // Delete one RecommendationFeedback
     * const RecommendationFeedback = await prisma.recommendationFeedback.delete({
     *   where: {
     *     // ... filter to delete one RecommendationFeedback
     *   }
     * })
     * 
     */
    delete<T extends RecommendationFeedbackDeleteArgs>(args: SelectSubset<T, RecommendationFeedbackDeleteArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RecommendationFeedback.
     * @param {RecommendationFeedbackUpdateArgs} args - Arguments to update one RecommendationFeedback.
     * @example
     * // Update one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationFeedbackUpdateArgs>(args: SelectSubset<T, RecommendationFeedbackUpdateArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RecommendationFeedbacks.
     * @param {RecommendationFeedbackDeleteManyArgs} args - Arguments to filter RecommendationFeedbacks to delete.
     * @example
     * // Delete a few RecommendationFeedbacks
     * const { count } = await prisma.recommendationFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationFeedbackDeleteManyArgs>(args?: SelectSubset<T, RecommendationFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendationFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecommendationFeedbacks
     * const recommendationFeedback = await prisma.recommendationFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationFeedbackUpdateManyArgs>(args: SelectSubset<T, RecommendationFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RecommendationFeedback.
     * @param {RecommendationFeedbackUpsertArgs} args - Arguments to update or create a RecommendationFeedback.
     * @example
     * // Update or create a RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.upsert({
     *   create: {
     *     // ... data to create a RecommendationFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecommendationFeedback we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationFeedbackUpsertArgs>(args: SelectSubset<T, RecommendationFeedbackUpsertArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RecommendationFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackCountArgs} args - Arguments to filter RecommendationFeedbacks to count.
     * @example
     * // Count the number of RecommendationFeedbacks
     * const count = await prisma.recommendationFeedback.count({
     *   where: {
     *     // ... the filter for the RecommendationFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends RecommendationFeedbackCountArgs>(
      args?: Subset<T, RecommendationFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecommendationFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendationFeedbackAggregateArgs>(args: Subset<T, RecommendationFeedbackAggregateArgs>): Prisma.PrismaPromise<GetRecommendationFeedbackAggregateType<T>>

    /**
     * Group by RecommendationFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendationFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationFeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendationFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecommendationFeedback model
   */
  readonly fields: RecommendationFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecommendationFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prediction<T extends PredictionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PredictionDefaultArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecommendationFeedback model
   */ 
  interface RecommendationFeedbackFieldRefs {
    readonly id: FieldRef<"RecommendationFeedback", 'String'>
    readonly predictionId: FieldRef<"RecommendationFeedback", 'String'>
    readonly userId: FieldRef<"RecommendationFeedback", 'String'>
    readonly isUseful: FieldRef<"RecommendationFeedback", 'Boolean'>
    readonly comment: FieldRef<"RecommendationFeedback", 'String'>
    readonly createdAt: FieldRef<"RecommendationFeedback", 'DateTime'>
    readonly updatedAt: FieldRef<"RecommendationFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecommendationFeedback findUnique
   */
  export type RecommendationFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedback to fetch.
     */
    where: RecommendationFeedbackWhereUniqueInput
  }

  /**
   * RecommendationFeedback findUniqueOrThrow
   */
  export type RecommendationFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedback to fetch.
     */
    where: RecommendationFeedbackWhereUniqueInput
  }

  /**
   * RecommendationFeedback findFirst
   */
  export type RecommendationFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedback to fetch.
     */
    where?: RecommendationFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationFeedbacks to fetch.
     */
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationFeedbacks.
     */
    cursor?: RecommendationFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationFeedbacks.
     */
    distinct?: RecommendationFeedbackScalarFieldEnum | RecommendationFeedbackScalarFieldEnum[]
  }

  /**
   * RecommendationFeedback findFirstOrThrow
   */
  export type RecommendationFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedback to fetch.
     */
    where?: RecommendationFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationFeedbacks to fetch.
     */
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationFeedbacks.
     */
    cursor?: RecommendationFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationFeedbacks.
     */
    distinct?: RecommendationFeedbackScalarFieldEnum | RecommendationFeedbackScalarFieldEnum[]
  }

  /**
   * RecommendationFeedback findMany
   */
  export type RecommendationFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedbacks to fetch.
     */
    where?: RecommendationFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationFeedbacks to fetch.
     */
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecommendationFeedbacks.
     */
    cursor?: RecommendationFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationFeedbacks.
     */
    skip?: number
    distinct?: RecommendationFeedbackScalarFieldEnum | RecommendationFeedbackScalarFieldEnum[]
  }

  /**
   * RecommendationFeedback create
   */
  export type RecommendationFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a RecommendationFeedback.
     */
    data: XOR<RecommendationFeedbackCreateInput, RecommendationFeedbackUncheckedCreateInput>
  }

  /**
   * RecommendationFeedback createMany
   */
  export type RecommendationFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecommendationFeedbacks.
     */
    data: RecommendationFeedbackCreateManyInput | RecommendationFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecommendationFeedback createManyAndReturn
   */
  export type RecommendationFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RecommendationFeedbacks.
     */
    data: RecommendationFeedbackCreateManyInput | RecommendationFeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendationFeedback update
   */
  export type RecommendationFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a RecommendationFeedback.
     */
    data: XOR<RecommendationFeedbackUpdateInput, RecommendationFeedbackUncheckedUpdateInput>
    /**
     * Choose, which RecommendationFeedback to update.
     */
    where: RecommendationFeedbackWhereUniqueInput
  }

  /**
   * RecommendationFeedback updateMany
   */
  export type RecommendationFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecommendationFeedbacks.
     */
    data: XOR<RecommendationFeedbackUpdateManyMutationInput, RecommendationFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which RecommendationFeedbacks to update
     */
    where?: RecommendationFeedbackWhereInput
  }

  /**
   * RecommendationFeedback upsert
   */
  export type RecommendationFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the RecommendationFeedback to update in case it exists.
     */
    where: RecommendationFeedbackWhereUniqueInput
    /**
     * In case the RecommendationFeedback found by the `where` argument doesn't exist, create a new RecommendationFeedback with this data.
     */
    create: XOR<RecommendationFeedbackCreateInput, RecommendationFeedbackUncheckedCreateInput>
    /**
     * In case the RecommendationFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationFeedbackUpdateInput, RecommendationFeedbackUncheckedUpdateInput>
  }

  /**
   * RecommendationFeedback delete
   */
  export type RecommendationFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
    /**
     * Filter which RecommendationFeedback to delete.
     */
    where: RecommendationFeedbackWhereUniqueInput
  }

  /**
   * RecommendationFeedback deleteMany
   */
  export type RecommendationFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationFeedbacks to delete
     */
    where?: RecommendationFeedbackWhereInput
  }

  /**
   * RecommendationFeedback without action
   */
  export type RecommendationFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model FollowUp
   */

  export type AggregateFollowUp = {
    _count: FollowUpCountAggregateOutputType | null
    _min: FollowUpMinAggregateOutputType | null
    _max: FollowUpMaxAggregateOutputType | null
  }

  export type FollowUpMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    reviewId: string | null
    assignedToId: string | null
    createdById: string | null
    status: $Enums.FollowUpStatus | null
    contactDate: Date | null
    actionTaken: string | null
    escalatedArea: string | null
    contactResult: string | null
    note: string | null
    closingNote: string | null
    closedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FollowUpMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    reviewId: string | null
    assignedToId: string | null
    createdById: string | null
    status: $Enums.FollowUpStatus | null
    contactDate: Date | null
    actionTaken: string | null
    escalatedArea: string | null
    contactResult: string | null
    note: string | null
    closingNote: string | null
    closedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FollowUpCountAggregateOutputType = {
    id: number
    clientId: number
    reviewId: number
    assignedToId: number
    createdById: number
    status: number
    contactDate: number
    actionTaken: number
    escalatedArea: number
    contactResult: number
    note: number
    closingNote: number
    closedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FollowUpMinAggregateInputType = {
    id?: true
    clientId?: true
    reviewId?: true
    assignedToId?: true
    createdById?: true
    status?: true
    contactDate?: true
    actionTaken?: true
    escalatedArea?: true
    contactResult?: true
    note?: true
    closingNote?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FollowUpMaxAggregateInputType = {
    id?: true
    clientId?: true
    reviewId?: true
    assignedToId?: true
    createdById?: true
    status?: true
    contactDate?: true
    actionTaken?: true
    escalatedArea?: true
    contactResult?: true
    note?: true
    closingNote?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FollowUpCountAggregateInputType = {
    id?: true
    clientId?: true
    reviewId?: true
    assignedToId?: true
    createdById?: true
    status?: true
    contactDate?: true
    actionTaken?: true
    escalatedArea?: true
    contactResult?: true
    note?: true
    closingNote?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FollowUpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowUp to aggregate.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowUps
    **/
    _count?: true | FollowUpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowUpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowUpMaxAggregateInputType
  }

  export type GetFollowUpAggregateType<T extends FollowUpAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowUp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowUp[P]>
      : GetScalarType<T[P], AggregateFollowUp[P]>
  }




  export type FollowUpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowUpWhereInput
    orderBy?: FollowUpOrderByWithAggregationInput | FollowUpOrderByWithAggregationInput[]
    by: FollowUpScalarFieldEnum[] | FollowUpScalarFieldEnum
    having?: FollowUpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowUpCountAggregateInputType | true
    _min?: FollowUpMinAggregateInputType
    _max?: FollowUpMaxAggregateInputType
  }

  export type FollowUpGroupByOutputType = {
    id: string
    clientId: string | null
    reviewId: string | null
    assignedToId: string | null
    createdById: string | null
    status: $Enums.FollowUpStatus
    contactDate: Date | null
    actionTaken: string | null
    escalatedArea: string | null
    contactResult: string | null
    note: string | null
    closingNote: string | null
    closedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FollowUpCountAggregateOutputType | null
    _min: FollowUpMinAggregateOutputType | null
    _max: FollowUpMaxAggregateOutputType | null
  }

  type GetFollowUpGroupByPayload<T extends FollowUpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowUpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowUpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowUpGroupByOutputType[P]>
            : GetScalarType<T[P], FollowUpGroupByOutputType[P]>
        }
      >
    >


  export type FollowUpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    reviewId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    status?: boolean
    contactDate?: boolean
    actionTaken?: boolean
    escalatedArea?: boolean
    contactResult?: boolean
    note?: boolean
    closingNote?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | FollowUp$clientArgs<ExtArgs>
    review?: boolean | FollowUp$reviewArgs<ExtArgs>
    assignedTo?: boolean | FollowUp$assignedToArgs<ExtArgs>
    createdBy?: boolean | FollowUp$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["followUp"]>

  export type FollowUpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    reviewId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    status?: boolean
    contactDate?: boolean
    actionTaken?: boolean
    escalatedArea?: boolean
    contactResult?: boolean
    note?: boolean
    closingNote?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | FollowUp$clientArgs<ExtArgs>
    review?: boolean | FollowUp$reviewArgs<ExtArgs>
    assignedTo?: boolean | FollowUp$assignedToArgs<ExtArgs>
    createdBy?: boolean | FollowUp$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["followUp"]>

  export type FollowUpSelectScalar = {
    id?: boolean
    clientId?: boolean
    reviewId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    status?: boolean
    contactDate?: boolean
    actionTaken?: boolean
    escalatedArea?: boolean
    contactResult?: boolean
    note?: boolean
    closingNote?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FollowUpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | FollowUp$clientArgs<ExtArgs>
    review?: boolean | FollowUp$reviewArgs<ExtArgs>
    assignedTo?: boolean | FollowUp$assignedToArgs<ExtArgs>
    createdBy?: boolean | FollowUp$createdByArgs<ExtArgs>
  }
  export type FollowUpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | FollowUp$clientArgs<ExtArgs>
    review?: boolean | FollowUp$reviewArgs<ExtArgs>
    assignedTo?: boolean | FollowUp$assignedToArgs<ExtArgs>
    createdBy?: boolean | FollowUp$createdByArgs<ExtArgs>
  }

  export type $FollowUpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowUp"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string | null
      reviewId: string | null
      assignedToId: string | null
      createdById: string | null
      status: $Enums.FollowUpStatus
      contactDate: Date | null
      actionTaken: string | null
      escalatedArea: string | null
      contactResult: string | null
      note: string | null
      closingNote: string | null
      closedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["followUp"]>
    composites: {}
  }

  type FollowUpGetPayload<S extends boolean | null | undefined | FollowUpDefaultArgs> = $Result.GetResult<Prisma.$FollowUpPayload, S>

  type FollowUpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowUpFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowUpCountAggregateInputType | true
    }

  export interface FollowUpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowUp'], meta: { name: 'FollowUp' } }
    /**
     * Find zero or one FollowUp that matches the filter.
     * @param {FollowUpFindUniqueArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowUpFindUniqueArgs>(args: SelectSubset<T, FollowUpFindUniqueArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FollowUp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FollowUpFindUniqueOrThrowArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowUpFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowUpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FollowUp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindFirstArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowUpFindFirstArgs>(args?: SelectSubset<T, FollowUpFindFirstArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FollowUp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindFirstOrThrowArgs} args - Arguments to find a FollowUp
     * @example
     * // Get one FollowUp
     * const followUp = await prisma.followUp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowUpFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowUpFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FollowUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowUps
     * const followUps = await prisma.followUp.findMany()
     * 
     * // Get first 10 FollowUps
     * const followUps = await prisma.followUp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followUpWithIdOnly = await prisma.followUp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowUpFindManyArgs>(args?: SelectSubset<T, FollowUpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FollowUp.
     * @param {FollowUpCreateArgs} args - Arguments to create a FollowUp.
     * @example
     * // Create one FollowUp
     * const FollowUp = await prisma.followUp.create({
     *   data: {
     *     // ... data to create a FollowUp
     *   }
     * })
     * 
     */
    create<T extends FollowUpCreateArgs>(args: SelectSubset<T, FollowUpCreateArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FollowUps.
     * @param {FollowUpCreateManyArgs} args - Arguments to create many FollowUps.
     * @example
     * // Create many FollowUps
     * const followUp = await prisma.followUp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowUpCreateManyArgs>(args?: SelectSubset<T, FollowUpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FollowUps and returns the data saved in the database.
     * @param {FollowUpCreateManyAndReturnArgs} args - Arguments to create many FollowUps.
     * @example
     * // Create many FollowUps
     * const followUp = await prisma.followUp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FollowUps and only return the `id`
     * const followUpWithIdOnly = await prisma.followUp.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowUpCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowUpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FollowUp.
     * @param {FollowUpDeleteArgs} args - Arguments to delete one FollowUp.
     * @example
     * // Delete one FollowUp
     * const FollowUp = await prisma.followUp.delete({
     *   where: {
     *     // ... filter to delete one FollowUp
     *   }
     * })
     * 
     */
    delete<T extends FollowUpDeleteArgs>(args: SelectSubset<T, FollowUpDeleteArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FollowUp.
     * @param {FollowUpUpdateArgs} args - Arguments to update one FollowUp.
     * @example
     * // Update one FollowUp
     * const followUp = await prisma.followUp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpUpdateArgs>(args: SelectSubset<T, FollowUpUpdateArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FollowUps.
     * @param {FollowUpDeleteManyArgs} args - Arguments to filter FollowUps to delete.
     * @example
     * // Delete a few FollowUps
     * const { count } = await prisma.followUp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowUpDeleteManyArgs>(args?: SelectSubset<T, FollowUpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowUps
     * const followUp = await prisma.followUp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpUpdateManyArgs>(args: SelectSubset<T, FollowUpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowUp.
     * @param {FollowUpUpsertArgs} args - Arguments to update or create a FollowUp.
     * @example
     * // Update or create a FollowUp
     * const followUp = await prisma.followUp.upsert({
     *   create: {
     *     // ... data to create a FollowUp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowUp we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpUpsertArgs>(args: SelectSubset<T, FollowUpUpsertArgs<ExtArgs>>): Prisma__FollowUpClient<$Result.GetResult<Prisma.$FollowUpPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FollowUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpCountArgs} args - Arguments to filter FollowUps to count.
     * @example
     * // Count the number of FollowUps
     * const count = await prisma.followUp.count({
     *   where: {
     *     // ... the filter for the FollowUps we want to count
     *   }
     * })
    **/
    count<T extends FollowUpCountArgs>(
      args?: Subset<T, FollowUpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowUpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowUpAggregateArgs>(args: Subset<T, FollowUpAggregateArgs>): Prisma.PrismaPromise<GetFollowUpAggregateType<T>>

    /**
     * Group by FollowUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowUpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowUpGroupByArgs['orderBy'] }
        : { orderBy?: FollowUpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowUpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowUpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowUp model
   */
  readonly fields: FollowUpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowUp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowUpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends FollowUp$clientArgs<ExtArgs> = {}>(args?: Subset<T, FollowUp$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    review<T extends FollowUp$reviewArgs<ExtArgs> = {}>(args?: Subset<T, FollowUp$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    assignedTo<T extends FollowUp$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, FollowUp$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    createdBy<T extends FollowUp$createdByArgs<ExtArgs> = {}>(args?: Subset<T, FollowUp$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FollowUp model
   */ 
  interface FollowUpFieldRefs {
    readonly id: FieldRef<"FollowUp", 'String'>
    readonly clientId: FieldRef<"FollowUp", 'String'>
    readonly reviewId: FieldRef<"FollowUp", 'String'>
    readonly assignedToId: FieldRef<"FollowUp", 'String'>
    readonly createdById: FieldRef<"FollowUp", 'String'>
    readonly status: FieldRef<"FollowUp", 'FollowUpStatus'>
    readonly contactDate: FieldRef<"FollowUp", 'DateTime'>
    readonly actionTaken: FieldRef<"FollowUp", 'String'>
    readonly escalatedArea: FieldRef<"FollowUp", 'String'>
    readonly contactResult: FieldRef<"FollowUp", 'String'>
    readonly note: FieldRef<"FollowUp", 'String'>
    readonly closingNote: FieldRef<"FollowUp", 'String'>
    readonly closedAt: FieldRef<"FollowUp", 'DateTime'>
    readonly createdAt: FieldRef<"FollowUp", 'DateTime'>
    readonly updatedAt: FieldRef<"FollowUp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FollowUp findUnique
   */
  export type FollowUpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp findUniqueOrThrow
   */
  export type FollowUpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp findFirst
   */
  export type FollowUpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp findFirstOrThrow
   */
  export type FollowUpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUp to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowUps.
     */
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp findMany
   */
  export type FollowUpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter, which FollowUps to fetch.
     */
    where?: FollowUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowUps to fetch.
     */
    orderBy?: FollowUpOrderByWithRelationInput | FollowUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowUps.
     */
    cursor?: FollowUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowUps.
     */
    skip?: number
    distinct?: FollowUpScalarFieldEnum | FollowUpScalarFieldEnum[]
  }

  /**
   * FollowUp create
   */
  export type FollowUpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowUp.
     */
    data: XOR<FollowUpCreateInput, FollowUpUncheckedCreateInput>
  }

  /**
   * FollowUp createMany
   */
  export type FollowUpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowUps.
     */
    data: FollowUpCreateManyInput | FollowUpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FollowUp createManyAndReturn
   */
  export type FollowUpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FollowUps.
     */
    data: FollowUpCreateManyInput | FollowUpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FollowUp update
   */
  export type FollowUpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowUp.
     */
    data: XOR<FollowUpUpdateInput, FollowUpUncheckedUpdateInput>
    /**
     * Choose, which FollowUp to update.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp updateMany
   */
  export type FollowUpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowUps.
     */
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyInput>
    /**
     * Filter which FollowUps to update
     */
    where?: FollowUpWhereInput
  }

  /**
   * FollowUp upsert
   */
  export type FollowUpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowUp to update in case it exists.
     */
    where: FollowUpWhereUniqueInput
    /**
     * In case the FollowUp found by the `where` argument doesn't exist, create a new FollowUp with this data.
     */
    create: XOR<FollowUpCreateInput, FollowUpUncheckedCreateInput>
    /**
     * In case the FollowUp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpUpdateInput, FollowUpUncheckedUpdateInput>
  }

  /**
   * FollowUp delete
   */
  export type FollowUpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
    /**
     * Filter which FollowUp to delete.
     */
    where: FollowUpWhereUniqueInput
  }

  /**
   * FollowUp deleteMany
   */
  export type FollowUpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowUps to delete
     */
    where?: FollowUpWhereInput
  }

  /**
   * FollowUp.client
   */
  export type FollowUp$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * FollowUp.review
   */
  export type FollowUp$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * FollowUp.assignedTo
   */
  export type FollowUp$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * FollowUp.createdBy
   */
  export type FollowUp$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * FollowUp without action
   */
  export type FollowUpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowUp
     */
    select?: FollowUpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowUpInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roleName: $Enums.RoleName | null
    action: string | null
    entityType: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roleName: $Enums.RoleName | null
    action: string | null
    entityType: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    roleName: number
    action: number
    entityType: number
    entityId: number
    previousValues: number
    newValues: number
    description: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    roleName?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    roleName?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    roleName?: true
    action?: true
    entityType?: true
    entityId?: true
    previousValues?: true
    newValues?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    roleName: $Enums.RoleName | null
    action: string
    entityType: string
    entityId: string | null
    previousValues: JsonValue | null
    newValues: JsonValue | null
    description: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleName?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    previousValues?: boolean
    newValues?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleName?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    previousValues?: boolean
    newValues?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    roleName?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    previousValues?: boolean
    newValues?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      roleName: $Enums.RoleName | null
      action: string
      entityType: string
      entityId: string | null
      previousValues: Prisma.JsonValue | null
      newValues: Prisma.JsonValue | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly roleName: FieldRef<"AuditLog", 'RoleName'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly previousValues: FieldRef<"AuditLog", 'Json'>
    readonly newValues: FieldRef<"AuditLog", 'Json'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    externalRef: 'externalRef',
    riskStatus: 'riskStatus',
    accumulatedRiskScore: 'accumulatedRiskScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const FileUploadScalarFieldEnum: {
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

  export type FileUploadScalarFieldEnum = (typeof FileUploadScalarFieldEnum)[keyof typeof FileUploadScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
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

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PredictionScalarFieldEnum: {
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

  export type PredictionScalarFieldEnum = (typeof PredictionScalarFieldEnum)[keyof typeof PredictionScalarFieldEnum]


  export const UploadErrorScalarFieldEnum: {
    id: 'id',
    fileUploadId: 'fileUploadId',
    rowNumber: 'rowNumber',
    sourceRecordId: 'sourceRecordId',
    reason: 'reason',
    rawData: 'rawData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UploadErrorScalarFieldEnum = (typeof UploadErrorScalarFieldEnum)[keyof typeof UploadErrorScalarFieldEnum]


  export const HumanCorrectionScalarFieldEnum: {
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

  export type HumanCorrectionScalarFieldEnum = (typeof HumanCorrectionScalarFieldEnum)[keyof typeof HumanCorrectionScalarFieldEnum]


  export const RecommendationFeedbackScalarFieldEnum: {
    id: 'id',
    predictionId: 'predictionId',
    userId: 'userId',
    isUseful: 'isUseful',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecommendationFeedbackScalarFieldEnum = (typeof RecommendationFeedbackScalarFieldEnum)[keyof typeof RecommendationFeedbackScalarFieldEnum]


  export const FollowUpScalarFieldEnum: {
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

  export type FollowUpScalarFieldEnum = (typeof FollowUpScalarFieldEnum)[keyof typeof FollowUpScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
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

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ClientRiskStatus'
   */
  export type EnumClientRiskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientRiskStatus'>
    


  /**
   * Reference to a field of type 'ClientRiskStatus[]'
   */
  export type ListEnumClientRiskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientRiskStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'RiskLabel'
   */
  export type EnumRiskLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLabel'>
    


  /**
   * Reference to a field of type 'RiskLabel[]'
   */
  export type ListEnumRiskLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLabel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SentimentLabel'
   */
  export type EnumSentimentLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SentimentLabel'>
    


  /**
   * Reference to a field of type 'SentimentLabel[]'
   */
  export type ListEnumSentimentLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SentimentLabel[]'>
    


  /**
   * Reference to a field of type 'ConfidenceLevel'
   */
  export type EnumConfidenceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConfidenceLevel'>
    


  /**
   * Reference to a field of type 'ConfidenceLevel[]'
   */
  export type ListEnumConfidenceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConfidenceLevel[]'>
    


  /**
   * Reference to a field of type 'FollowUpStatus'
   */
  export type EnumFollowUpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowUpStatus'>
    


  /**
   * Reference to a field of type 'FollowUpStatus[]'
   */
  export type ListEnumFollowUpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowUpStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    uploadedFiles?: FileUploadListRelationFilter
    manualReviews?: ReviewListRelationFilter
    corrections?: HumanCorrectionListRelationFilter
    recommendationFeedback?: RecommendationFeedbackListRelationFilter
    assignedFollowUps?: FollowUpListRelationFilter
    createdFollowUps?: FollowUpListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    uploadedFiles?: FileUploadOrderByRelationAggregateInput
    manualReviews?: ReviewOrderByRelationAggregateInput
    corrections?: HumanCorrectionOrderByRelationAggregateInput
    recommendationFeedback?: RecommendationFeedbackOrderByRelationAggregateInput
    assignedFollowUps?: FollowUpOrderByRelationAggregateInput
    createdFollowUps?: FollowUpOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    uploadedFiles?: FileUploadListRelationFilter
    manualReviews?: ReviewListRelationFilter
    corrections?: HumanCorrectionListRelationFilter
    recommendationFeedback?: RecommendationFeedbackListRelationFilter
    assignedFollowUps?: FollowUpListRelationFilter
    createdFollowUps?: FollowUpListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    roleId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    externalRef?: StringNullableFilter<"Client"> | string | null
    riskStatus?: EnumClientRiskStatusFilter<"Client"> | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    reviews?: ReviewListRelationFilter
    followUps?: FollowUpListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    externalRef?: SortOrderInput | SortOrder
    riskStatus?: SortOrder
    accumulatedRiskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    followUps?: FollowUpOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    externalRef?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    riskStatus?: EnumClientRiskStatusFilter<"Client"> | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    reviews?: ReviewListRelationFilter
    followUps?: FollowUpListRelationFilter
  }, "id" | "name" | "externalRef">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    externalRef?: SortOrderInput | SortOrder
    riskStatus?: SortOrder
    accumulatedRiskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    externalRef?: StringNullableWithAggregatesFilter<"Client"> | string | null
    riskStatus?: EnumClientRiskStatusWithAggregatesFilter<"Client"> | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntWithAggregatesFilter<"Client"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type FileUploadWhereInput = {
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    id?: StringFilter<"FileUpload"> | string
    originalFileName?: StringFilter<"FileUpload"> | string
    storedFileName?: StringNullableFilter<"FileUpload"> | string | null
    mimeType?: StringNullableFilter<"FileUpload"> | string | null
    status?: StringFilter<"FileUpload"> | string
    totalRows?: IntFilter<"FileUpload"> | number
    validRows?: IntFilter<"FileUpload"> | number
    invalidRows?: IntFilter<"FileUpload"> | number
    warnings?: JsonNullableFilter<"FileUpload">
    uploadedById?: StringNullableFilter<"FileUpload"> | string | null
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviews?: ReviewListRelationFilter
    errors?: UploadErrorListRelationFilter
  }

  export type FileUploadOrderByWithRelationInput = {
    id?: SortOrder
    originalFileName?: SortOrder
    storedFileName?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    validRows?: SortOrder
    invalidRows?: SortOrder
    warnings?: SortOrderInput | SortOrder
    uploadedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedBy?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    errors?: UploadErrorOrderByRelationAggregateInput
  }

  export type FileUploadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileUploadWhereInput | FileUploadWhereInput[]
    OR?: FileUploadWhereInput[]
    NOT?: FileUploadWhereInput | FileUploadWhereInput[]
    originalFileName?: StringFilter<"FileUpload"> | string
    storedFileName?: StringNullableFilter<"FileUpload"> | string | null
    mimeType?: StringNullableFilter<"FileUpload"> | string | null
    status?: StringFilter<"FileUpload"> | string
    totalRows?: IntFilter<"FileUpload"> | number
    validRows?: IntFilter<"FileUpload"> | number
    invalidRows?: IntFilter<"FileUpload"> | number
    warnings?: JsonNullableFilter<"FileUpload">
    uploadedById?: StringNullableFilter<"FileUpload"> | string | null
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviews?: ReviewListRelationFilter
    errors?: UploadErrorListRelationFilter
  }, "id">

  export type FileUploadOrderByWithAggregationInput = {
    id?: SortOrder
    originalFileName?: SortOrder
    storedFileName?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    validRows?: SortOrder
    invalidRows?: SortOrder
    warnings?: SortOrderInput | SortOrder
    uploadedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileUploadCountOrderByAggregateInput
    _avg?: FileUploadAvgOrderByAggregateInput
    _max?: FileUploadMaxOrderByAggregateInput
    _min?: FileUploadMinOrderByAggregateInput
    _sum?: FileUploadSumOrderByAggregateInput
  }

  export type FileUploadScalarWhereWithAggregatesInput = {
    AND?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    OR?: FileUploadScalarWhereWithAggregatesInput[]
    NOT?: FileUploadScalarWhereWithAggregatesInput | FileUploadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileUpload"> | string
    originalFileName?: StringWithAggregatesFilter<"FileUpload"> | string
    storedFileName?: StringNullableWithAggregatesFilter<"FileUpload"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"FileUpload"> | string | null
    status?: StringWithAggregatesFilter<"FileUpload"> | string
    totalRows?: IntWithAggregatesFilter<"FileUpload"> | number
    validRows?: IntWithAggregatesFilter<"FileUpload"> | number
    invalidRows?: IntWithAggregatesFilter<"FileUpload"> | number
    warnings?: JsonNullableWithAggregatesFilter<"FileUpload">
    uploadedById?: StringNullableWithAggregatesFilter<"FileUpload"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileUpload"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    clientId?: StringFilter<"Review"> | string
    fileUploadId?: StringNullableFilter<"Review"> | string | null
    createdById?: StringNullableFilter<"Review"> | string | null
    sourceRecordId?: StringNullableFilter<"Review"> | string | null
    reviewDate?: DateTimeFilter<"Review"> | Date | string
    year?: IntNullableFilter<"Review"> | number | null
    quarter?: StringNullableFilter<"Review"> | string | null
    month?: StringNullableFilter<"Review"> | string | null
    source?: StringNullableFilter<"Review"> | string | null
    comment?: StringFilter<"Review"> | string
    originalSentiment?: StringNullableFilter<"Review"> | string | null
    category?: StringFilter<"Review"> | string
    subcategory?: StringFilter<"Review"> | string
    product?: StringNullableFilter<"Review"> | string | null
    detail?: StringNullableFilter<"Review"> | string | null
    originalClassification?: StringFilter<"Review"> | string
    npsScore?: IntNullableFilter<"Review"> | number | null
    rawData?: JsonNullableFilter<"Review">
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    fileUpload?: XOR<FileUploadNullableScalarRelationFilter, FileUploadWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    prediction?: XOR<PredictionNullableScalarRelationFilter, PredictionWhereInput> | null
    followUps?: FollowUpListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    fileUploadId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    sourceRecordId?: SortOrderInput | SortOrder
    reviewDate?: SortOrder
    year?: SortOrderInput | SortOrder
    quarter?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    comment?: SortOrder
    originalSentiment?: SortOrderInput | SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    product?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    originalClassification?: SortOrder
    npsScore?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    fileUpload?: FileUploadOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    prediction?: PredictionOrderByWithRelationInput
    followUps?: FollowUpOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceRecordId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    clientId?: StringFilter<"Review"> | string
    fileUploadId?: StringNullableFilter<"Review"> | string | null
    createdById?: StringNullableFilter<"Review"> | string | null
    reviewDate?: DateTimeFilter<"Review"> | Date | string
    year?: IntNullableFilter<"Review"> | number | null
    quarter?: StringNullableFilter<"Review"> | string | null
    month?: StringNullableFilter<"Review"> | string | null
    source?: StringNullableFilter<"Review"> | string | null
    comment?: StringFilter<"Review"> | string
    originalSentiment?: StringNullableFilter<"Review"> | string | null
    category?: StringFilter<"Review"> | string
    subcategory?: StringFilter<"Review"> | string
    product?: StringNullableFilter<"Review"> | string | null
    detail?: StringNullableFilter<"Review"> | string | null
    originalClassification?: StringFilter<"Review"> | string
    npsScore?: IntNullableFilter<"Review"> | number | null
    rawData?: JsonNullableFilter<"Review">
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    fileUpload?: XOR<FileUploadNullableScalarRelationFilter, FileUploadWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    prediction?: XOR<PredictionNullableScalarRelationFilter, PredictionWhereInput> | null
    followUps?: FollowUpListRelationFilter
  }, "id" | "sourceRecordId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    fileUploadId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    sourceRecordId?: SortOrderInput | SortOrder
    reviewDate?: SortOrder
    year?: SortOrderInput | SortOrder
    quarter?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    comment?: SortOrder
    originalSentiment?: SortOrderInput | SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    product?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    originalClassification?: SortOrder
    npsScore?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    clientId?: StringWithAggregatesFilter<"Review"> | string
    fileUploadId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Review"> | string | null
    sourceRecordId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    reviewDate?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    year?: IntNullableWithAggregatesFilter<"Review"> | number | null
    quarter?: StringNullableWithAggregatesFilter<"Review"> | string | null
    month?: StringNullableWithAggregatesFilter<"Review"> | string | null
    source?: StringNullableWithAggregatesFilter<"Review"> | string | null
    comment?: StringWithAggregatesFilter<"Review"> | string
    originalSentiment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    category?: StringWithAggregatesFilter<"Review"> | string
    subcategory?: StringWithAggregatesFilter<"Review"> | string
    product?: StringNullableWithAggregatesFilter<"Review"> | string | null
    detail?: StringNullableWithAggregatesFilter<"Review"> | string | null
    originalClassification?: StringWithAggregatesFilter<"Review"> | string
    npsScore?: IntNullableWithAggregatesFilter<"Review"> | number | null
    rawData?: JsonNullableWithAggregatesFilter<"Review">
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type PredictionWhereInput = {
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    id?: StringFilter<"Prediction"> | string
    reviewId?: StringFilter<"Prediction"> | string
    riskLabel?: EnumRiskLabelFilter<"Prediction"> | $Enums.RiskLabel
    probability?: FloatFilter<"Prediction"> | number
    sentiment?: EnumSentimentLabelFilter<"Prediction"> | $Enums.SentimentLabel
    primaryCause?: StringFilter<"Prediction"> | string
    secondaryCause?: StringNullableFilter<"Prediction"> | string | null
    confidence?: EnumConfidenceLevelFilter<"Prediction"> | $Enums.ConfidenceLevel
    urgency?: StringFilter<"Prediction"> | string
    recommendation?: StringFilter<"Prediction"> | string
    explanation?: StringFilter<"Prediction"> | string
    detectedSignals?: JsonNullableFilter<"Prediction">
    warnings?: JsonNullableFilter<"Prediction">
    triggeredRules?: JsonNullableFilter<"Prediction">
    modelVersion?: StringNullableFilter<"Prediction"> | string | null
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeFilter<"Prediction"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    humanCorrections?: HumanCorrectionListRelationFilter
    recommendationFeedback?: RecommendationFeedbackListRelationFilter
  }

  export type PredictionOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    riskLabel?: SortOrder
    probability?: SortOrder
    sentiment?: SortOrder
    primaryCause?: SortOrder
    secondaryCause?: SortOrderInput | SortOrder
    confidence?: SortOrder
    urgency?: SortOrder
    recommendation?: SortOrder
    explanation?: SortOrder
    detectedSignals?: SortOrderInput | SortOrder
    warnings?: SortOrderInput | SortOrder
    triggeredRules?: SortOrderInput | SortOrder
    modelVersion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
    humanCorrections?: HumanCorrectionOrderByRelationAggregateInput
    recommendationFeedback?: RecommendationFeedbackOrderByRelationAggregateInput
  }

  export type PredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reviewId?: string
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    riskLabel?: EnumRiskLabelFilter<"Prediction"> | $Enums.RiskLabel
    probability?: FloatFilter<"Prediction"> | number
    sentiment?: EnumSentimentLabelFilter<"Prediction"> | $Enums.SentimentLabel
    primaryCause?: StringFilter<"Prediction"> | string
    secondaryCause?: StringNullableFilter<"Prediction"> | string | null
    confidence?: EnumConfidenceLevelFilter<"Prediction"> | $Enums.ConfidenceLevel
    urgency?: StringFilter<"Prediction"> | string
    recommendation?: StringFilter<"Prediction"> | string
    explanation?: StringFilter<"Prediction"> | string
    detectedSignals?: JsonNullableFilter<"Prediction">
    warnings?: JsonNullableFilter<"Prediction">
    triggeredRules?: JsonNullableFilter<"Prediction">
    modelVersion?: StringNullableFilter<"Prediction"> | string | null
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeFilter<"Prediction"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    humanCorrections?: HumanCorrectionListRelationFilter
    recommendationFeedback?: RecommendationFeedbackListRelationFilter
  }, "id" | "reviewId">

  export type PredictionOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    riskLabel?: SortOrder
    probability?: SortOrder
    sentiment?: SortOrder
    primaryCause?: SortOrder
    secondaryCause?: SortOrderInput | SortOrder
    confidence?: SortOrder
    urgency?: SortOrder
    recommendation?: SortOrder
    explanation?: SortOrder
    detectedSignals?: SortOrderInput | SortOrder
    warnings?: SortOrderInput | SortOrder
    triggeredRules?: SortOrderInput | SortOrder
    modelVersion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PredictionCountOrderByAggregateInput
    _avg?: PredictionAvgOrderByAggregateInput
    _max?: PredictionMaxOrderByAggregateInput
    _min?: PredictionMinOrderByAggregateInput
    _sum?: PredictionSumOrderByAggregateInput
  }

  export type PredictionScalarWhereWithAggregatesInput = {
    AND?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    OR?: PredictionScalarWhereWithAggregatesInput[]
    NOT?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prediction"> | string
    reviewId?: StringWithAggregatesFilter<"Prediction"> | string
    riskLabel?: EnumRiskLabelWithAggregatesFilter<"Prediction"> | $Enums.RiskLabel
    probability?: FloatWithAggregatesFilter<"Prediction"> | number
    sentiment?: EnumSentimentLabelWithAggregatesFilter<"Prediction"> | $Enums.SentimentLabel
    primaryCause?: StringWithAggregatesFilter<"Prediction"> | string
    secondaryCause?: StringNullableWithAggregatesFilter<"Prediction"> | string | null
    confidence?: EnumConfidenceLevelWithAggregatesFilter<"Prediction"> | $Enums.ConfidenceLevel
    urgency?: StringWithAggregatesFilter<"Prediction"> | string
    recommendation?: StringWithAggregatesFilter<"Prediction"> | string
    explanation?: StringWithAggregatesFilter<"Prediction"> | string
    detectedSignals?: JsonNullableWithAggregatesFilter<"Prediction">
    warnings?: JsonNullableWithAggregatesFilter<"Prediction">
    triggeredRules?: JsonNullableWithAggregatesFilter<"Prediction">
    modelVersion?: StringNullableWithAggregatesFilter<"Prediction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
  }

  export type UploadErrorWhereInput = {
    AND?: UploadErrorWhereInput | UploadErrorWhereInput[]
    OR?: UploadErrorWhereInput[]
    NOT?: UploadErrorWhereInput | UploadErrorWhereInput[]
    id?: StringFilter<"UploadError"> | string
    fileUploadId?: StringFilter<"UploadError"> | string
    rowNumber?: IntFilter<"UploadError"> | number
    sourceRecordId?: StringNullableFilter<"UploadError"> | string | null
    reason?: StringFilter<"UploadError"> | string
    rawData?: JsonNullableFilter<"UploadError">
    createdAt?: DateTimeFilter<"UploadError"> | Date | string
    updatedAt?: DateTimeFilter<"UploadError"> | Date | string
    fileUpload?: XOR<FileUploadScalarRelationFilter, FileUploadWhereInput>
  }

  export type UploadErrorOrderByWithRelationInput = {
    id?: SortOrder
    fileUploadId?: SortOrder
    rowNumber?: SortOrder
    sourceRecordId?: SortOrderInput | SortOrder
    reason?: SortOrder
    rawData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fileUpload?: FileUploadOrderByWithRelationInput
  }

  export type UploadErrorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UploadErrorWhereInput | UploadErrorWhereInput[]
    OR?: UploadErrorWhereInput[]
    NOT?: UploadErrorWhereInput | UploadErrorWhereInput[]
    fileUploadId?: StringFilter<"UploadError"> | string
    rowNumber?: IntFilter<"UploadError"> | number
    sourceRecordId?: StringNullableFilter<"UploadError"> | string | null
    reason?: StringFilter<"UploadError"> | string
    rawData?: JsonNullableFilter<"UploadError">
    createdAt?: DateTimeFilter<"UploadError"> | Date | string
    updatedAt?: DateTimeFilter<"UploadError"> | Date | string
    fileUpload?: XOR<FileUploadScalarRelationFilter, FileUploadWhereInput>
  }, "id">

  export type UploadErrorOrderByWithAggregationInput = {
    id?: SortOrder
    fileUploadId?: SortOrder
    rowNumber?: SortOrder
    sourceRecordId?: SortOrderInput | SortOrder
    reason?: SortOrder
    rawData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UploadErrorCountOrderByAggregateInput
    _avg?: UploadErrorAvgOrderByAggregateInput
    _max?: UploadErrorMaxOrderByAggregateInput
    _min?: UploadErrorMinOrderByAggregateInput
    _sum?: UploadErrorSumOrderByAggregateInput
  }

  export type UploadErrorScalarWhereWithAggregatesInput = {
    AND?: UploadErrorScalarWhereWithAggregatesInput | UploadErrorScalarWhereWithAggregatesInput[]
    OR?: UploadErrorScalarWhereWithAggregatesInput[]
    NOT?: UploadErrorScalarWhereWithAggregatesInput | UploadErrorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadError"> | string
    fileUploadId?: StringWithAggregatesFilter<"UploadError"> | string
    rowNumber?: IntWithAggregatesFilter<"UploadError"> | number
    sourceRecordId?: StringNullableWithAggregatesFilter<"UploadError"> | string | null
    reason?: StringWithAggregatesFilter<"UploadError"> | string
    rawData?: JsonNullableWithAggregatesFilter<"UploadError">
    createdAt?: DateTimeWithAggregatesFilter<"UploadError"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UploadError"> | Date | string
  }

  export type HumanCorrectionWhereInput = {
    AND?: HumanCorrectionWhereInput | HumanCorrectionWhereInput[]
    OR?: HumanCorrectionWhereInput[]
    NOT?: HumanCorrectionWhereInput | HumanCorrectionWhereInput[]
    id?: StringFilter<"HumanCorrection"> | string
    predictionId?: StringFilter<"HumanCorrection"> | string
    correctedById?: StringFilter<"HumanCorrection"> | string
    originalRiskLabel?: EnumRiskLabelFilter<"HumanCorrection"> | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFilter<"HumanCorrection"> | $Enums.RiskLabel
    originalSentiment?: EnumSentimentLabelNullableFilter<"HumanCorrection"> | $Enums.SentimentLabel | null
    correctedSentiment?: EnumSentimentLabelNullableFilter<"HumanCorrection"> | $Enums.SentimentLabel | null
    originalPrimaryCause?: StringNullableFilter<"HumanCorrection"> | string | null
    correctedPrimaryCause?: StringNullableFilter<"HumanCorrection"> | string | null
    reason?: StringNullableFilter<"HumanCorrection"> | string | null
    createdAt?: DateTimeFilter<"HumanCorrection"> | Date | string
    updatedAt?: DateTimeFilter<"HumanCorrection"> | Date | string
    prediction?: XOR<PredictionScalarRelationFilter, PredictionWhereInput>
    correctedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HumanCorrectionOrderByWithRelationInput = {
    id?: SortOrder
    predictionId?: SortOrder
    correctedById?: SortOrder
    originalRiskLabel?: SortOrder
    correctedRiskLabel?: SortOrder
    originalSentiment?: SortOrderInput | SortOrder
    correctedSentiment?: SortOrderInput | SortOrder
    originalPrimaryCause?: SortOrderInput | SortOrder
    correctedPrimaryCause?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prediction?: PredictionOrderByWithRelationInput
    correctedBy?: UserOrderByWithRelationInput
  }

  export type HumanCorrectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HumanCorrectionWhereInput | HumanCorrectionWhereInput[]
    OR?: HumanCorrectionWhereInput[]
    NOT?: HumanCorrectionWhereInput | HumanCorrectionWhereInput[]
    predictionId?: StringFilter<"HumanCorrection"> | string
    correctedById?: StringFilter<"HumanCorrection"> | string
    originalRiskLabel?: EnumRiskLabelFilter<"HumanCorrection"> | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFilter<"HumanCorrection"> | $Enums.RiskLabel
    originalSentiment?: EnumSentimentLabelNullableFilter<"HumanCorrection"> | $Enums.SentimentLabel | null
    correctedSentiment?: EnumSentimentLabelNullableFilter<"HumanCorrection"> | $Enums.SentimentLabel | null
    originalPrimaryCause?: StringNullableFilter<"HumanCorrection"> | string | null
    correctedPrimaryCause?: StringNullableFilter<"HumanCorrection"> | string | null
    reason?: StringNullableFilter<"HumanCorrection"> | string | null
    createdAt?: DateTimeFilter<"HumanCorrection"> | Date | string
    updatedAt?: DateTimeFilter<"HumanCorrection"> | Date | string
    prediction?: XOR<PredictionScalarRelationFilter, PredictionWhereInput>
    correctedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HumanCorrectionOrderByWithAggregationInput = {
    id?: SortOrder
    predictionId?: SortOrder
    correctedById?: SortOrder
    originalRiskLabel?: SortOrder
    correctedRiskLabel?: SortOrder
    originalSentiment?: SortOrderInput | SortOrder
    correctedSentiment?: SortOrderInput | SortOrder
    originalPrimaryCause?: SortOrderInput | SortOrder
    correctedPrimaryCause?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HumanCorrectionCountOrderByAggregateInput
    _max?: HumanCorrectionMaxOrderByAggregateInput
    _min?: HumanCorrectionMinOrderByAggregateInput
  }

  export type HumanCorrectionScalarWhereWithAggregatesInput = {
    AND?: HumanCorrectionScalarWhereWithAggregatesInput | HumanCorrectionScalarWhereWithAggregatesInput[]
    OR?: HumanCorrectionScalarWhereWithAggregatesInput[]
    NOT?: HumanCorrectionScalarWhereWithAggregatesInput | HumanCorrectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HumanCorrection"> | string
    predictionId?: StringWithAggregatesFilter<"HumanCorrection"> | string
    correctedById?: StringWithAggregatesFilter<"HumanCorrection"> | string
    originalRiskLabel?: EnumRiskLabelWithAggregatesFilter<"HumanCorrection"> | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelWithAggregatesFilter<"HumanCorrection"> | $Enums.RiskLabel
    originalSentiment?: EnumSentimentLabelNullableWithAggregatesFilter<"HumanCorrection"> | $Enums.SentimentLabel | null
    correctedSentiment?: EnumSentimentLabelNullableWithAggregatesFilter<"HumanCorrection"> | $Enums.SentimentLabel | null
    originalPrimaryCause?: StringNullableWithAggregatesFilter<"HumanCorrection"> | string | null
    correctedPrimaryCause?: StringNullableWithAggregatesFilter<"HumanCorrection"> | string | null
    reason?: StringNullableWithAggregatesFilter<"HumanCorrection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HumanCorrection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HumanCorrection"> | Date | string
  }

  export type RecommendationFeedbackWhereInput = {
    AND?: RecommendationFeedbackWhereInput | RecommendationFeedbackWhereInput[]
    OR?: RecommendationFeedbackWhereInput[]
    NOT?: RecommendationFeedbackWhereInput | RecommendationFeedbackWhereInput[]
    id?: StringFilter<"RecommendationFeedback"> | string
    predictionId?: StringFilter<"RecommendationFeedback"> | string
    userId?: StringFilter<"RecommendationFeedback"> | string
    isUseful?: BoolFilter<"RecommendationFeedback"> | boolean
    comment?: StringNullableFilter<"RecommendationFeedback"> | string | null
    createdAt?: DateTimeFilter<"RecommendationFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"RecommendationFeedback"> | Date | string
    prediction?: XOR<PredictionScalarRelationFilter, PredictionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecommendationFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    predictionId?: SortOrder
    userId?: SortOrder
    isUseful?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prediction?: PredictionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RecommendationFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendationFeedbackWhereInput | RecommendationFeedbackWhereInput[]
    OR?: RecommendationFeedbackWhereInput[]
    NOT?: RecommendationFeedbackWhereInput | RecommendationFeedbackWhereInput[]
    predictionId?: StringFilter<"RecommendationFeedback"> | string
    userId?: StringFilter<"RecommendationFeedback"> | string
    isUseful?: BoolFilter<"RecommendationFeedback"> | boolean
    comment?: StringNullableFilter<"RecommendationFeedback"> | string | null
    createdAt?: DateTimeFilter<"RecommendationFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"RecommendationFeedback"> | Date | string
    prediction?: XOR<PredictionScalarRelationFilter, PredictionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecommendationFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    predictionId?: SortOrder
    userId?: SortOrder
    isUseful?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecommendationFeedbackCountOrderByAggregateInput
    _max?: RecommendationFeedbackMaxOrderByAggregateInput
    _min?: RecommendationFeedbackMinOrderByAggregateInput
  }

  export type RecommendationFeedbackScalarWhereWithAggregatesInput = {
    AND?: RecommendationFeedbackScalarWhereWithAggregatesInput | RecommendationFeedbackScalarWhereWithAggregatesInput[]
    OR?: RecommendationFeedbackScalarWhereWithAggregatesInput[]
    NOT?: RecommendationFeedbackScalarWhereWithAggregatesInput | RecommendationFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecommendationFeedback"> | string
    predictionId?: StringWithAggregatesFilter<"RecommendationFeedback"> | string
    userId?: StringWithAggregatesFilter<"RecommendationFeedback"> | string
    isUseful?: BoolWithAggregatesFilter<"RecommendationFeedback"> | boolean
    comment?: StringNullableWithAggregatesFilter<"RecommendationFeedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RecommendationFeedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecommendationFeedback"> | Date | string
  }

  export type FollowUpWhereInput = {
    AND?: FollowUpWhereInput | FollowUpWhereInput[]
    OR?: FollowUpWhereInput[]
    NOT?: FollowUpWhereInput | FollowUpWhereInput[]
    id?: StringFilter<"FollowUp"> | string
    clientId?: StringNullableFilter<"FollowUp"> | string | null
    reviewId?: StringNullableFilter<"FollowUp"> | string | null
    assignedToId?: StringNullableFilter<"FollowUp"> | string | null
    createdById?: StringNullableFilter<"FollowUp"> | string | null
    status?: EnumFollowUpStatusFilter<"FollowUp"> | $Enums.FollowUpStatus
    contactDate?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    actionTaken?: StringNullableFilter<"FollowUp"> | string | null
    escalatedArea?: StringNullableFilter<"FollowUp"> | string | null
    contactResult?: StringNullableFilter<"FollowUp"> | string | null
    note?: StringNullableFilter<"FollowUp"> | string | null
    closingNote?: StringNullableFilter<"FollowUp"> | string | null
    closedAt?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    createdAt?: DateTimeFilter<"FollowUp"> | Date | string
    updatedAt?: DateTimeFilter<"FollowUp"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type FollowUpOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    reviewId?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    status?: SortOrder
    contactDate?: SortOrderInput | SortOrder
    actionTaken?: SortOrderInput | SortOrder
    escalatedArea?: SortOrderInput | SortOrder
    contactResult?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    closingNote?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type FollowUpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FollowUpWhereInput | FollowUpWhereInput[]
    OR?: FollowUpWhereInput[]
    NOT?: FollowUpWhereInput | FollowUpWhereInput[]
    clientId?: StringNullableFilter<"FollowUp"> | string | null
    reviewId?: StringNullableFilter<"FollowUp"> | string | null
    assignedToId?: StringNullableFilter<"FollowUp"> | string | null
    createdById?: StringNullableFilter<"FollowUp"> | string | null
    status?: EnumFollowUpStatusFilter<"FollowUp"> | $Enums.FollowUpStatus
    contactDate?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    actionTaken?: StringNullableFilter<"FollowUp"> | string | null
    escalatedArea?: StringNullableFilter<"FollowUp"> | string | null
    contactResult?: StringNullableFilter<"FollowUp"> | string | null
    note?: StringNullableFilter<"FollowUp"> | string | null
    closingNote?: StringNullableFilter<"FollowUp"> | string | null
    closedAt?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    createdAt?: DateTimeFilter<"FollowUp"> | Date | string
    updatedAt?: DateTimeFilter<"FollowUp"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type FollowUpOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    reviewId?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    status?: SortOrder
    contactDate?: SortOrderInput | SortOrder
    actionTaken?: SortOrderInput | SortOrder
    escalatedArea?: SortOrderInput | SortOrder
    contactResult?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    closingNote?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FollowUpCountOrderByAggregateInput
    _max?: FollowUpMaxOrderByAggregateInput
    _min?: FollowUpMinOrderByAggregateInput
  }

  export type FollowUpScalarWhereWithAggregatesInput = {
    AND?: FollowUpScalarWhereWithAggregatesInput | FollowUpScalarWhereWithAggregatesInput[]
    OR?: FollowUpScalarWhereWithAggregatesInput[]
    NOT?: FollowUpScalarWhereWithAggregatesInput | FollowUpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FollowUp"> | string
    clientId?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    reviewId?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    status?: EnumFollowUpStatusWithAggregatesFilter<"FollowUp"> | $Enums.FollowUpStatus
    contactDate?: DateTimeNullableWithAggregatesFilter<"FollowUp"> | Date | string | null
    actionTaken?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    escalatedArea?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    contactResult?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    note?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    closingNote?: StringNullableWithAggregatesFilter<"FollowUp"> | string | null
    closedAt?: DateTimeNullableWithAggregatesFilter<"FollowUp"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FollowUp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FollowUp"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    roleName?: EnumRoleNameNullableFilter<"AuditLog"> | $Enums.RoleName | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    previousValues?: JsonNullableFilter<"AuditLog">
    newValues?: JsonNullableFilter<"AuditLog">
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    roleName?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    previousValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    roleName?: EnumRoleNameNullableFilter<"AuditLog"> | $Enums.RoleName | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    previousValues?: JsonNullableFilter<"AuditLog">
    newValues?: JsonNullableFilter<"AuditLog">
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    roleName?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    previousValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    roleName?: EnumRoleNameNullableWithAggregatesFilter<"AuditLog"> | $Enums.RoleName | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    previousValues?: JsonNullableWithAggregatesFilter<"AuditLog">
    newValues?: JsonNullableWithAggregatesFilter<"AuditLog">
    description?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewUncheckedCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpUncheckedCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUncheckedUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    externalRef?: string | null
    riskStatus?: $Enums.ClientRiskStatus
    accumulatedRiskScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutClientInput
    followUps?: FollowUpCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    externalRef?: string | null
    riskStatus?: $Enums.ClientRiskStatus
    accumulatedRiskScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    riskStatus?: EnumClientRiskStatusFieldUpdateOperationsInput | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutClientNestedInput
    followUps?: FollowUpUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    riskStatus?: EnumClientRiskStatusFieldUpdateOperationsInput | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    externalRef?: string | null
    riskStatus?: $Enums.ClientRiskStatus
    accumulatedRiskScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    riskStatus?: EnumClientRiskStatusFieldUpdateOperationsInput | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    riskStatus?: EnumClientRiskStatusFieldUpdateOperationsInput | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedBy?: UserCreateNestedOneWithoutUploadedFilesInput
    reviews?: ReviewCreateNestedManyWithoutFileUploadInput
    errors?: UploadErrorCreateNestedManyWithoutFileUploadInput
  }

  export type FileUploadUncheckedCreateInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    uploadedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutFileUploadInput
    errors?: UploadErrorUncheckedCreateNestedManyWithoutFileUploadInput
  }

  export type FileUploadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneWithoutUploadedFilesNestedInput
    reviews?: ReviewUpdateManyWithoutFileUploadNestedInput
    errors?: UploadErrorUpdateManyWithoutFileUploadNestedInput
  }

  export type FileUploadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutFileUploadNestedInput
    errors?: UploadErrorUncheckedUpdateManyWithoutFileUploadNestedInput
  }

  export type FileUploadCreateManyInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    uploadedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutReviewsInput
    fileUpload?: FileUploadCreateNestedOneWithoutReviewsInput
    createdBy?: UserCreateNestedOneWithoutManualReviewsInput
    prediction?: PredictionCreateNestedOneWithoutReviewInput
    followUps?: FollowUpCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    clientId: string
    fileUploadId?: string | null
    createdById?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction?: PredictionUncheckedCreateNestedOneWithoutReviewInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutReviewsNestedInput
    fileUpload?: FileUploadUpdateOneWithoutReviewsNestedInput
    createdBy?: UserUpdateOneWithoutManualReviewsNestedInput
    prediction?: PredictionUpdateOneWithoutReviewNestedInput
    followUps?: FollowUpUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    fileUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUncheckedUpdateOneWithoutReviewNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    clientId: string
    fileUploadId?: string | null
    createdById?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    fileUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionCreateInput = {
    id?: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutPredictionInput
    humanCorrections?: HumanCorrectionCreateNestedManyWithoutPredictionInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUncheckedCreateInput = {
    id?: string
    reviewId: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    humanCorrections?: HumanCorrectionUncheckedCreateNestedManyWithoutPredictionInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutPredictionNestedInput
    humanCorrections?: HumanCorrectionUpdateManyWithoutPredictionNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    humanCorrections?: HumanCorrectionUncheckedUpdateManyWithoutPredictionNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionCreateManyInput = {
    id?: string
    reviewId: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadErrorCreateInput = {
    id?: string
    rowNumber: number
    sourceRecordId?: string | null
    reason: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fileUpload: FileUploadCreateNestedOneWithoutErrorsInput
  }

  export type UploadErrorUncheckedCreateInput = {
    id?: string
    fileUploadId: string
    rowNumber: number
    sourceRecordId?: string | null
    reason: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadErrorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUpload?: FileUploadUpdateOneRequiredWithoutErrorsNestedInput
  }

  export type UploadErrorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUploadId?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadErrorCreateManyInput = {
    id?: string
    fileUploadId: string
    rowNumber: number
    sourceRecordId?: string | null
    reason: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadErrorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadErrorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUploadId?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanCorrectionCreateInput = {
    id?: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction: PredictionCreateNestedOneWithoutHumanCorrectionsInput
    correctedBy: UserCreateNestedOneWithoutCorrectionsInput
  }

  export type HumanCorrectionUncheckedCreateInput = {
    id?: string
    predictionId: string
    correctedById: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HumanCorrectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUpdateOneRequiredWithoutHumanCorrectionsNestedInput
    correctedBy?: UserUpdateOneRequiredWithoutCorrectionsNestedInput
  }

  export type HumanCorrectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictionId?: StringFieldUpdateOperationsInput | string
    correctedById?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanCorrectionCreateManyInput = {
    id?: string
    predictionId: string
    correctedById: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HumanCorrectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanCorrectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictionId?: StringFieldUpdateOperationsInput | string
    correctedById?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackCreateInput = {
    id?: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction: PredictionCreateNestedOneWithoutRecommendationFeedbackInput
    user: UserCreateNestedOneWithoutRecommendationFeedbackInput
  }

  export type RecommendationFeedbackUncheckedCreateInput = {
    id?: string
    predictionId: string
    userId: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUpdateOneRequiredWithoutRecommendationFeedbackNestedInput
    user?: UserUpdateOneRequiredWithoutRecommendationFeedbackNestedInput
  }

  export type RecommendationFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackCreateManyInput = {
    id?: string
    predictionId: string
    userId: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpCreateInput = {
    id?: string
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutFollowUpsInput
    review?: ReviewCreateNestedOneWithoutFollowUpsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedFollowUpsInput
    createdBy?: UserCreateNestedOneWithoutCreatedFollowUpsInput
  }

  export type FollowUpUncheckedCreateInput = {
    id?: string
    clientId?: string | null
    reviewId?: string | null
    assignedToId?: string | null
    createdById?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutFollowUpsNestedInput
    review?: ReviewUpdateOneWithoutFollowUpsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedFollowUpsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedFollowUpsNestedInput
  }

  export type FollowUpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpCreateManyInput = {
    id?: string
    clientId?: string | null
    reviewId?: string | null
    assignedToId?: string | null
    createdById?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    roleName?: $Enums.RoleName | null
    action: string
    entityType: string
    entityId?: string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    roleName?: $Enums.RoleName | null
    action: string
    entityType: string
    entityId?: string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleName?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    roleName?: $Enums.RoleName | null
    action: string
    entityType: string
    entityId?: string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleName?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type FileUploadListRelationFilter = {
    every?: FileUploadWhereInput
    some?: FileUploadWhereInput
    none?: FileUploadWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type HumanCorrectionListRelationFilter = {
    every?: HumanCorrectionWhereInput
    some?: HumanCorrectionWhereInput
    none?: HumanCorrectionWhereInput
  }

  export type RecommendationFeedbackListRelationFilter = {
    every?: RecommendationFeedbackWhereInput
    some?: RecommendationFeedbackWhereInput
    none?: RecommendationFeedbackWhereInput
  }

  export type FollowUpListRelationFilter = {
    every?: FollowUpWhereInput
    some?: FollowUpWhereInput
    none?: FollowUpWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type FileUploadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HumanCorrectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowUpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumClientRiskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientRiskStatus | EnumClientRiskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientRiskStatus[] | ListEnumClientRiskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientRiskStatus[] | ListEnumClientRiskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientRiskStatusFilter<$PrismaModel> | $Enums.ClientRiskStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    externalRef?: SortOrder
    riskStatus?: SortOrder
    accumulatedRiskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    accumulatedRiskScore?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    externalRef?: SortOrder
    riskStatus?: SortOrder
    accumulatedRiskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    externalRef?: SortOrder
    riskStatus?: SortOrder
    accumulatedRiskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    accumulatedRiskScore?: SortOrder
  }

  export type EnumClientRiskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientRiskStatus | EnumClientRiskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientRiskStatus[] | ListEnumClientRiskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientRiskStatus[] | ListEnumClientRiskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientRiskStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientRiskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientRiskStatusFilter<$PrismaModel>
    _max?: NestedEnumClientRiskStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UploadErrorListRelationFilter = {
    every?: UploadErrorWhereInput
    some?: UploadErrorWhereInput
    none?: UploadErrorWhereInput
  }

  export type UploadErrorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileUploadCountOrderByAggregateInput = {
    id?: SortOrder
    originalFileName?: SortOrder
    storedFileName?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    validRows?: SortOrder
    invalidRows?: SortOrder
    warnings?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadAvgOrderByAggregateInput = {
    totalRows?: SortOrder
    validRows?: SortOrder
    invalidRows?: SortOrder
  }

  export type FileUploadMaxOrderByAggregateInput = {
    id?: SortOrder
    originalFileName?: SortOrder
    storedFileName?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    validRows?: SortOrder
    invalidRows?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadMinOrderByAggregateInput = {
    id?: SortOrder
    originalFileName?: SortOrder
    storedFileName?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    totalRows?: SortOrder
    validRows?: SortOrder
    invalidRows?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadSumOrderByAggregateInput = {
    totalRows?: SortOrder
    validRows?: SortOrder
    invalidRows?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type FileUploadNullableScalarRelationFilter = {
    is?: FileUploadWhereInput | null
    isNot?: FileUploadWhereInput | null
  }

  export type PredictionNullableScalarRelationFilter = {
    is?: PredictionWhereInput | null
    isNot?: PredictionWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    fileUploadId?: SortOrder
    createdById?: SortOrder
    sourceRecordId?: SortOrder
    reviewDate?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    originalSentiment?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    product?: SortOrder
    detail?: SortOrder
    originalClassification?: SortOrder
    npsScore?: SortOrder
    rawData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    year?: SortOrder
    npsScore?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    fileUploadId?: SortOrder
    createdById?: SortOrder
    sourceRecordId?: SortOrder
    reviewDate?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    originalSentiment?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    product?: SortOrder
    detail?: SortOrder
    originalClassification?: SortOrder
    npsScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    fileUploadId?: SortOrder
    createdById?: SortOrder
    sourceRecordId?: SortOrder
    reviewDate?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    source?: SortOrder
    comment?: SortOrder
    originalSentiment?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    product?: SortOrder
    detail?: SortOrder
    originalClassification?: SortOrder
    npsScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    year?: SortOrder
    npsScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRiskLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLabel | EnumRiskLabelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLabel[] | ListEnumRiskLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLabel[] | ListEnumRiskLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLabelFilter<$PrismaModel> | $Enums.RiskLabel
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumSentimentLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentLabelFilter<$PrismaModel> | $Enums.SentimentLabel
  }

  export type EnumConfidenceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfidenceLevel | EnumConfidenceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceLevelFilter<$PrismaModel> | $Enums.ConfidenceLevel
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type PredictionCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    riskLabel?: SortOrder
    probability?: SortOrder
    sentiment?: SortOrder
    primaryCause?: SortOrder
    secondaryCause?: SortOrder
    confidence?: SortOrder
    urgency?: SortOrder
    recommendation?: SortOrder
    explanation?: SortOrder
    detectedSignals?: SortOrder
    warnings?: SortOrder
    triggeredRules?: SortOrder
    modelVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionAvgOrderByAggregateInput = {
    probability?: SortOrder
  }

  export type PredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    riskLabel?: SortOrder
    probability?: SortOrder
    sentiment?: SortOrder
    primaryCause?: SortOrder
    secondaryCause?: SortOrder
    confidence?: SortOrder
    urgency?: SortOrder
    recommendation?: SortOrder
    explanation?: SortOrder
    modelVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    riskLabel?: SortOrder
    probability?: SortOrder
    sentiment?: SortOrder
    primaryCause?: SortOrder
    secondaryCause?: SortOrder
    confidence?: SortOrder
    urgency?: SortOrder
    recommendation?: SortOrder
    explanation?: SortOrder
    modelVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionSumOrderByAggregateInput = {
    probability?: SortOrder
  }

  export type EnumRiskLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLabel | EnumRiskLabelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLabel[] | ListEnumRiskLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLabel[] | ListEnumRiskLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLabelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLabelFilter<$PrismaModel>
    _max?: NestedEnumRiskLabelFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumSentimentLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentLabelWithAggregatesFilter<$PrismaModel> | $Enums.SentimentLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentimentLabelFilter<$PrismaModel>
    _max?: NestedEnumSentimentLabelFilter<$PrismaModel>
  }

  export type EnumConfidenceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfidenceLevel | EnumConfidenceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ConfidenceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConfidenceLevelFilter<$PrismaModel>
    _max?: NestedEnumConfidenceLevelFilter<$PrismaModel>
  }

  export type FileUploadScalarRelationFilter = {
    is?: FileUploadWhereInput
    isNot?: FileUploadWhereInput
  }

  export type UploadErrorCountOrderByAggregateInput = {
    id?: SortOrder
    fileUploadId?: SortOrder
    rowNumber?: SortOrder
    sourceRecordId?: SortOrder
    reason?: SortOrder
    rawData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadErrorAvgOrderByAggregateInput = {
    rowNumber?: SortOrder
  }

  export type UploadErrorMaxOrderByAggregateInput = {
    id?: SortOrder
    fileUploadId?: SortOrder
    rowNumber?: SortOrder
    sourceRecordId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadErrorMinOrderByAggregateInput = {
    id?: SortOrder
    fileUploadId?: SortOrder
    rowNumber?: SortOrder
    sourceRecordId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadErrorSumOrderByAggregateInput = {
    rowNumber?: SortOrder
  }

  export type EnumSentimentLabelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel> | null
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSentimentLabelNullableFilter<$PrismaModel> | $Enums.SentimentLabel | null
  }

  export type PredictionScalarRelationFilter = {
    is?: PredictionWhereInput
    isNot?: PredictionWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HumanCorrectionCountOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    correctedById?: SortOrder
    originalRiskLabel?: SortOrder
    correctedRiskLabel?: SortOrder
    originalSentiment?: SortOrder
    correctedSentiment?: SortOrder
    originalPrimaryCause?: SortOrder
    correctedPrimaryCause?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HumanCorrectionMaxOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    correctedById?: SortOrder
    originalRiskLabel?: SortOrder
    correctedRiskLabel?: SortOrder
    originalSentiment?: SortOrder
    correctedSentiment?: SortOrder
    originalPrimaryCause?: SortOrder
    correctedPrimaryCause?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HumanCorrectionMinOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    correctedById?: SortOrder
    originalRiskLabel?: SortOrder
    correctedRiskLabel?: SortOrder
    originalSentiment?: SortOrder
    correctedSentiment?: SortOrder
    originalPrimaryCause?: SortOrder
    correctedPrimaryCause?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSentimentLabelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel> | null
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSentimentLabelNullableWithAggregatesFilter<$PrismaModel> | $Enums.SentimentLabel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSentimentLabelNullableFilter<$PrismaModel>
    _max?: NestedEnumSentimentLabelNullableFilter<$PrismaModel>
  }

  export type RecommendationFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    userId?: SortOrder
    isUseful?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    userId?: SortOrder
    isUseful?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    predictionId?: SortOrder
    userId?: SortOrder
    isUseful?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFollowUpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpStatus | EnumFollowUpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowUpStatus[] | ListEnumFollowUpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowUpStatus[] | ListEnumFollowUpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowUpStatusFilter<$PrismaModel> | $Enums.FollowUpStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type FollowUpCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    reviewId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    contactDate?: SortOrder
    actionTaken?: SortOrder
    escalatedArea?: SortOrder
    contactResult?: SortOrder
    note?: SortOrder
    closingNote?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowUpMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    reviewId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    contactDate?: SortOrder
    actionTaken?: SortOrder
    escalatedArea?: SortOrder
    contactResult?: SortOrder
    note?: SortOrder
    closingNote?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowUpMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    reviewId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    contactDate?: SortOrder
    actionTaken?: SortOrder
    escalatedArea?: SortOrder
    contactResult?: SortOrder
    note?: SortOrder
    closingNote?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFollowUpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpStatus | EnumFollowUpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowUpStatus[] | ListEnumFollowUpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowUpStatus[] | ListEnumFollowUpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowUpStatusWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFollowUpStatusFilter<$PrismaModel>
    _max?: NestedEnumFollowUpStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNameNullableFilter<$PrismaModel> | $Enums.RoleName | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleName?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    previousValues?: SortOrder
    newValues?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleName?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleName?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.RoleName | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNameNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNameNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type FileUploadCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<FileUploadCreateWithoutUploadedByInput, FileUploadUncheckedCreateWithoutUploadedByInput> | FileUploadCreateWithoutUploadedByInput[] | FileUploadUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutUploadedByInput | FileUploadCreateOrConnectWithoutUploadedByInput[]
    createMany?: FileUploadCreateManyUploadedByInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ReviewCreateWithoutCreatedByInput, ReviewUncheckedCreateWithoutCreatedByInput> | ReviewCreateWithoutCreatedByInput[] | ReviewUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCreatedByInput | ReviewCreateOrConnectWithoutCreatedByInput[]
    createMany?: ReviewCreateManyCreatedByInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type HumanCorrectionCreateNestedManyWithoutCorrectedByInput = {
    create?: XOR<HumanCorrectionCreateWithoutCorrectedByInput, HumanCorrectionUncheckedCreateWithoutCorrectedByInput> | HumanCorrectionCreateWithoutCorrectedByInput[] | HumanCorrectionUncheckedCreateWithoutCorrectedByInput[]
    connectOrCreate?: HumanCorrectionCreateOrConnectWithoutCorrectedByInput | HumanCorrectionCreateOrConnectWithoutCorrectedByInput[]
    createMany?: HumanCorrectionCreateManyCorrectedByInputEnvelope
    connect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
  }

  export type RecommendationFeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationFeedbackCreateWithoutUserInput, RecommendationFeedbackUncheckedCreateWithoutUserInput> | RecommendationFeedbackCreateWithoutUserInput[] | RecommendationFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationFeedbackCreateOrConnectWithoutUserInput | RecommendationFeedbackCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationFeedbackCreateManyUserInputEnvelope
    connect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
  }

  export type FollowUpCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<FollowUpCreateWithoutAssignedToInput, FollowUpUncheckedCreateWithoutAssignedToInput> | FollowUpCreateWithoutAssignedToInput[] | FollowUpUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutAssignedToInput | FollowUpCreateOrConnectWithoutAssignedToInput[]
    createMany?: FollowUpCreateManyAssignedToInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type FollowUpCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FollowUpCreateWithoutCreatedByInput, FollowUpUncheckedCreateWithoutCreatedByInput> | FollowUpCreateWithoutCreatedByInput[] | FollowUpUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutCreatedByInput | FollowUpCreateOrConnectWithoutCreatedByInput[]
    createMany?: FollowUpCreateManyCreatedByInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type FileUploadUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<FileUploadCreateWithoutUploadedByInput, FileUploadUncheckedCreateWithoutUploadedByInput> | FileUploadCreateWithoutUploadedByInput[] | FileUploadUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutUploadedByInput | FileUploadCreateOrConnectWithoutUploadedByInput[]
    createMany?: FileUploadCreateManyUploadedByInputEnvelope
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ReviewCreateWithoutCreatedByInput, ReviewUncheckedCreateWithoutCreatedByInput> | ReviewCreateWithoutCreatedByInput[] | ReviewUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCreatedByInput | ReviewCreateOrConnectWithoutCreatedByInput[]
    createMany?: ReviewCreateManyCreatedByInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput = {
    create?: XOR<HumanCorrectionCreateWithoutCorrectedByInput, HumanCorrectionUncheckedCreateWithoutCorrectedByInput> | HumanCorrectionCreateWithoutCorrectedByInput[] | HumanCorrectionUncheckedCreateWithoutCorrectedByInput[]
    connectOrCreate?: HumanCorrectionCreateOrConnectWithoutCorrectedByInput | HumanCorrectionCreateOrConnectWithoutCorrectedByInput[]
    createMany?: HumanCorrectionCreateManyCorrectedByInputEnvelope
    connect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
  }

  export type RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationFeedbackCreateWithoutUserInput, RecommendationFeedbackUncheckedCreateWithoutUserInput> | RecommendationFeedbackCreateWithoutUserInput[] | RecommendationFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationFeedbackCreateOrConnectWithoutUserInput | RecommendationFeedbackCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationFeedbackCreateManyUserInputEnvelope
    connect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
  }

  export type FollowUpUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<FollowUpCreateWithoutAssignedToInput, FollowUpUncheckedCreateWithoutAssignedToInput> | FollowUpCreateWithoutAssignedToInput[] | FollowUpUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutAssignedToInput | FollowUpCreateOrConnectWithoutAssignedToInput[]
    createMany?: FollowUpCreateManyAssignedToInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type FollowUpUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FollowUpCreateWithoutCreatedByInput, FollowUpUncheckedCreateWithoutCreatedByInput> | FollowUpCreateWithoutCreatedByInput[] | FollowUpUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutCreatedByInput | FollowUpCreateOrConnectWithoutCreatedByInput[]
    createMany?: FollowUpCreateManyCreatedByInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type FileUploadUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<FileUploadCreateWithoutUploadedByInput, FileUploadUncheckedCreateWithoutUploadedByInput> | FileUploadCreateWithoutUploadedByInput[] | FileUploadUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutUploadedByInput | FileUploadCreateOrConnectWithoutUploadedByInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutUploadedByInput | FileUploadUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: FileUploadCreateManyUploadedByInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutUploadedByInput | FileUploadUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutUploadedByInput | FileUploadUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ReviewCreateWithoutCreatedByInput, ReviewUncheckedCreateWithoutCreatedByInput> | ReviewCreateWithoutCreatedByInput[] | ReviewUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCreatedByInput | ReviewCreateOrConnectWithoutCreatedByInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCreatedByInput | ReviewUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ReviewCreateManyCreatedByInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCreatedByInput | ReviewUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCreatedByInput | ReviewUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type HumanCorrectionUpdateManyWithoutCorrectedByNestedInput = {
    create?: XOR<HumanCorrectionCreateWithoutCorrectedByInput, HumanCorrectionUncheckedCreateWithoutCorrectedByInput> | HumanCorrectionCreateWithoutCorrectedByInput[] | HumanCorrectionUncheckedCreateWithoutCorrectedByInput[]
    connectOrCreate?: HumanCorrectionCreateOrConnectWithoutCorrectedByInput | HumanCorrectionCreateOrConnectWithoutCorrectedByInput[]
    upsert?: HumanCorrectionUpsertWithWhereUniqueWithoutCorrectedByInput | HumanCorrectionUpsertWithWhereUniqueWithoutCorrectedByInput[]
    createMany?: HumanCorrectionCreateManyCorrectedByInputEnvelope
    set?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    disconnect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    delete?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    connect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    update?: HumanCorrectionUpdateWithWhereUniqueWithoutCorrectedByInput | HumanCorrectionUpdateWithWhereUniqueWithoutCorrectedByInput[]
    updateMany?: HumanCorrectionUpdateManyWithWhereWithoutCorrectedByInput | HumanCorrectionUpdateManyWithWhereWithoutCorrectedByInput[]
    deleteMany?: HumanCorrectionScalarWhereInput | HumanCorrectionScalarWhereInput[]
  }

  export type RecommendationFeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationFeedbackCreateWithoutUserInput, RecommendationFeedbackUncheckedCreateWithoutUserInput> | RecommendationFeedbackCreateWithoutUserInput[] | RecommendationFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationFeedbackCreateOrConnectWithoutUserInput | RecommendationFeedbackCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationFeedbackUpsertWithWhereUniqueWithoutUserInput | RecommendationFeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationFeedbackCreateManyUserInputEnvelope
    set?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    disconnect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    delete?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    connect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    update?: RecommendationFeedbackUpdateWithWhereUniqueWithoutUserInput | RecommendationFeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationFeedbackUpdateManyWithWhereWithoutUserInput | RecommendationFeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationFeedbackScalarWhereInput | RecommendationFeedbackScalarWhereInput[]
  }

  export type FollowUpUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<FollowUpCreateWithoutAssignedToInput, FollowUpUncheckedCreateWithoutAssignedToInput> | FollowUpCreateWithoutAssignedToInput[] | FollowUpUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutAssignedToInput | FollowUpCreateOrConnectWithoutAssignedToInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutAssignedToInput | FollowUpUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: FollowUpCreateManyAssignedToInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutAssignedToInput | FollowUpUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutAssignedToInput | FollowUpUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type FollowUpUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FollowUpCreateWithoutCreatedByInput, FollowUpUncheckedCreateWithoutCreatedByInput> | FollowUpCreateWithoutCreatedByInput[] | FollowUpUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutCreatedByInput | FollowUpCreateOrConnectWithoutCreatedByInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutCreatedByInput | FollowUpUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FollowUpCreateManyCreatedByInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutCreatedByInput | FollowUpUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutCreatedByInput | FollowUpUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<FileUploadCreateWithoutUploadedByInput, FileUploadUncheckedCreateWithoutUploadedByInput> | FileUploadCreateWithoutUploadedByInput[] | FileUploadUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: FileUploadCreateOrConnectWithoutUploadedByInput | FileUploadCreateOrConnectWithoutUploadedByInput[]
    upsert?: FileUploadUpsertWithWhereUniqueWithoutUploadedByInput | FileUploadUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: FileUploadCreateManyUploadedByInputEnvelope
    set?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    disconnect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    delete?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    connect?: FileUploadWhereUniqueInput | FileUploadWhereUniqueInput[]
    update?: FileUploadUpdateWithWhereUniqueWithoutUploadedByInput | FileUploadUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: FileUploadUpdateManyWithWhereWithoutUploadedByInput | FileUploadUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ReviewCreateWithoutCreatedByInput, ReviewUncheckedCreateWithoutCreatedByInput> | ReviewCreateWithoutCreatedByInput[] | ReviewUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCreatedByInput | ReviewCreateOrConnectWithoutCreatedByInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCreatedByInput | ReviewUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ReviewCreateManyCreatedByInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCreatedByInput | ReviewUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCreatedByInput | ReviewUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput = {
    create?: XOR<HumanCorrectionCreateWithoutCorrectedByInput, HumanCorrectionUncheckedCreateWithoutCorrectedByInput> | HumanCorrectionCreateWithoutCorrectedByInput[] | HumanCorrectionUncheckedCreateWithoutCorrectedByInput[]
    connectOrCreate?: HumanCorrectionCreateOrConnectWithoutCorrectedByInput | HumanCorrectionCreateOrConnectWithoutCorrectedByInput[]
    upsert?: HumanCorrectionUpsertWithWhereUniqueWithoutCorrectedByInput | HumanCorrectionUpsertWithWhereUniqueWithoutCorrectedByInput[]
    createMany?: HumanCorrectionCreateManyCorrectedByInputEnvelope
    set?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    disconnect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    delete?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    connect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    update?: HumanCorrectionUpdateWithWhereUniqueWithoutCorrectedByInput | HumanCorrectionUpdateWithWhereUniqueWithoutCorrectedByInput[]
    updateMany?: HumanCorrectionUpdateManyWithWhereWithoutCorrectedByInput | HumanCorrectionUpdateManyWithWhereWithoutCorrectedByInput[]
    deleteMany?: HumanCorrectionScalarWhereInput | HumanCorrectionScalarWhereInput[]
  }

  export type RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationFeedbackCreateWithoutUserInput, RecommendationFeedbackUncheckedCreateWithoutUserInput> | RecommendationFeedbackCreateWithoutUserInput[] | RecommendationFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationFeedbackCreateOrConnectWithoutUserInput | RecommendationFeedbackCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationFeedbackUpsertWithWhereUniqueWithoutUserInput | RecommendationFeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationFeedbackCreateManyUserInputEnvelope
    set?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    disconnect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    delete?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    connect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    update?: RecommendationFeedbackUpdateWithWhereUniqueWithoutUserInput | RecommendationFeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationFeedbackUpdateManyWithWhereWithoutUserInput | RecommendationFeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationFeedbackScalarWhereInput | RecommendationFeedbackScalarWhereInput[]
  }

  export type FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<FollowUpCreateWithoutAssignedToInput, FollowUpUncheckedCreateWithoutAssignedToInput> | FollowUpCreateWithoutAssignedToInput[] | FollowUpUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutAssignedToInput | FollowUpCreateOrConnectWithoutAssignedToInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutAssignedToInput | FollowUpUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: FollowUpCreateManyAssignedToInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutAssignedToInput | FollowUpUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutAssignedToInput | FollowUpUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FollowUpCreateWithoutCreatedByInput, FollowUpUncheckedCreateWithoutCreatedByInput> | FollowUpCreateWithoutCreatedByInput[] | FollowUpUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutCreatedByInput | FollowUpCreateOrConnectWithoutCreatedByInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutCreatedByInput | FollowUpUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FollowUpCreateManyCreatedByInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutCreatedByInput | FollowUpUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutCreatedByInput | FollowUpUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutClientInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FollowUpCreateNestedManyWithoutClientInput = {
    create?: XOR<FollowUpCreateWithoutClientInput, FollowUpUncheckedCreateWithoutClientInput> | FollowUpCreateWithoutClientInput[] | FollowUpUncheckedCreateWithoutClientInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutClientInput | FollowUpCreateOrConnectWithoutClientInput[]
    createMany?: FollowUpCreateManyClientInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FollowUpUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<FollowUpCreateWithoutClientInput, FollowUpUncheckedCreateWithoutClientInput> | FollowUpCreateWithoutClientInput[] | FollowUpUncheckedCreateWithoutClientInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutClientInput | FollowUpCreateOrConnectWithoutClientInput[]
    createMany?: FollowUpCreateManyClientInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type EnumClientRiskStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClientRiskStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput | ReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput | ReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput | ReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FollowUpUpdateManyWithoutClientNestedInput = {
    create?: XOR<FollowUpCreateWithoutClientInput, FollowUpUncheckedCreateWithoutClientInput> | FollowUpCreateWithoutClientInput[] | FollowUpUncheckedCreateWithoutClientInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutClientInput | FollowUpCreateOrConnectWithoutClientInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutClientInput | FollowUpUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: FollowUpCreateManyClientInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutClientInput | FollowUpUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutClientInput | FollowUpUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput | ReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput | ReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput | ReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FollowUpUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<FollowUpCreateWithoutClientInput, FollowUpUncheckedCreateWithoutClientInput> | FollowUpCreateWithoutClientInput[] | FollowUpUncheckedCreateWithoutClientInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutClientInput | FollowUpCreateOrConnectWithoutClientInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutClientInput | FollowUpUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: FollowUpCreateManyClientInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutClientInput | FollowUpUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutClientInput | FollowUpUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUploadedFilesInput = {
    create?: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedFilesInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutFileUploadInput = {
    create?: XOR<ReviewCreateWithoutFileUploadInput, ReviewUncheckedCreateWithoutFileUploadInput> | ReviewCreateWithoutFileUploadInput[] | ReviewUncheckedCreateWithoutFileUploadInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutFileUploadInput | ReviewCreateOrConnectWithoutFileUploadInput[]
    createMany?: ReviewCreateManyFileUploadInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UploadErrorCreateNestedManyWithoutFileUploadInput = {
    create?: XOR<UploadErrorCreateWithoutFileUploadInput, UploadErrorUncheckedCreateWithoutFileUploadInput> | UploadErrorCreateWithoutFileUploadInput[] | UploadErrorUncheckedCreateWithoutFileUploadInput[]
    connectOrCreate?: UploadErrorCreateOrConnectWithoutFileUploadInput | UploadErrorCreateOrConnectWithoutFileUploadInput[]
    createMany?: UploadErrorCreateManyFileUploadInputEnvelope
    connect?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutFileUploadInput = {
    create?: XOR<ReviewCreateWithoutFileUploadInput, ReviewUncheckedCreateWithoutFileUploadInput> | ReviewCreateWithoutFileUploadInput[] | ReviewUncheckedCreateWithoutFileUploadInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutFileUploadInput | ReviewCreateOrConnectWithoutFileUploadInput[]
    createMany?: ReviewCreateManyFileUploadInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UploadErrorUncheckedCreateNestedManyWithoutFileUploadInput = {
    create?: XOR<UploadErrorCreateWithoutFileUploadInput, UploadErrorUncheckedCreateWithoutFileUploadInput> | UploadErrorCreateWithoutFileUploadInput[] | UploadErrorUncheckedCreateWithoutFileUploadInput[]
    connectOrCreate?: UploadErrorCreateOrConnectWithoutFileUploadInput | UploadErrorCreateOrConnectWithoutFileUploadInput[]
    createMany?: UploadErrorCreateManyFileUploadInputEnvelope
    connect?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutUploadedFilesNestedInput = {
    create?: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedFilesInput
    upsert?: UserUpsertWithoutUploadedFilesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedFilesInput, UserUpdateWithoutUploadedFilesInput>, UserUncheckedUpdateWithoutUploadedFilesInput>
  }

  export type ReviewUpdateManyWithoutFileUploadNestedInput = {
    create?: XOR<ReviewCreateWithoutFileUploadInput, ReviewUncheckedCreateWithoutFileUploadInput> | ReviewCreateWithoutFileUploadInput[] | ReviewUncheckedCreateWithoutFileUploadInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutFileUploadInput | ReviewCreateOrConnectWithoutFileUploadInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutFileUploadInput | ReviewUpsertWithWhereUniqueWithoutFileUploadInput[]
    createMany?: ReviewCreateManyFileUploadInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutFileUploadInput | ReviewUpdateWithWhereUniqueWithoutFileUploadInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutFileUploadInput | ReviewUpdateManyWithWhereWithoutFileUploadInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UploadErrorUpdateManyWithoutFileUploadNestedInput = {
    create?: XOR<UploadErrorCreateWithoutFileUploadInput, UploadErrorUncheckedCreateWithoutFileUploadInput> | UploadErrorCreateWithoutFileUploadInput[] | UploadErrorUncheckedCreateWithoutFileUploadInput[]
    connectOrCreate?: UploadErrorCreateOrConnectWithoutFileUploadInput | UploadErrorCreateOrConnectWithoutFileUploadInput[]
    upsert?: UploadErrorUpsertWithWhereUniqueWithoutFileUploadInput | UploadErrorUpsertWithWhereUniqueWithoutFileUploadInput[]
    createMany?: UploadErrorCreateManyFileUploadInputEnvelope
    set?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
    disconnect?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
    delete?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
    connect?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
    update?: UploadErrorUpdateWithWhereUniqueWithoutFileUploadInput | UploadErrorUpdateWithWhereUniqueWithoutFileUploadInput[]
    updateMany?: UploadErrorUpdateManyWithWhereWithoutFileUploadInput | UploadErrorUpdateManyWithWhereWithoutFileUploadInput[]
    deleteMany?: UploadErrorScalarWhereInput | UploadErrorScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutFileUploadNestedInput = {
    create?: XOR<ReviewCreateWithoutFileUploadInput, ReviewUncheckedCreateWithoutFileUploadInput> | ReviewCreateWithoutFileUploadInput[] | ReviewUncheckedCreateWithoutFileUploadInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutFileUploadInput | ReviewCreateOrConnectWithoutFileUploadInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutFileUploadInput | ReviewUpsertWithWhereUniqueWithoutFileUploadInput[]
    createMany?: ReviewCreateManyFileUploadInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutFileUploadInput | ReviewUpdateWithWhereUniqueWithoutFileUploadInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutFileUploadInput | ReviewUpdateManyWithWhereWithoutFileUploadInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UploadErrorUncheckedUpdateManyWithoutFileUploadNestedInput = {
    create?: XOR<UploadErrorCreateWithoutFileUploadInput, UploadErrorUncheckedCreateWithoutFileUploadInput> | UploadErrorCreateWithoutFileUploadInput[] | UploadErrorUncheckedCreateWithoutFileUploadInput[]
    connectOrCreate?: UploadErrorCreateOrConnectWithoutFileUploadInput | UploadErrorCreateOrConnectWithoutFileUploadInput[]
    upsert?: UploadErrorUpsertWithWhereUniqueWithoutFileUploadInput | UploadErrorUpsertWithWhereUniqueWithoutFileUploadInput[]
    createMany?: UploadErrorCreateManyFileUploadInputEnvelope
    set?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
    disconnect?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
    delete?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
    connect?: UploadErrorWhereUniqueInput | UploadErrorWhereUniqueInput[]
    update?: UploadErrorUpdateWithWhereUniqueWithoutFileUploadInput | UploadErrorUpdateWithWhereUniqueWithoutFileUploadInput[]
    updateMany?: UploadErrorUpdateManyWithWhereWithoutFileUploadInput | UploadErrorUpdateManyWithWhereWithoutFileUploadInput[]
    deleteMany?: UploadErrorScalarWhereInput | UploadErrorScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ClientCreateWithoutReviewsInput, ClientUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutReviewsInput
    connect?: ClientWhereUniqueInput
  }

  export type FileUploadCreateNestedOneWithoutReviewsInput = {
    create?: XOR<FileUploadCreateWithoutReviewsInput, FileUploadUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: FileUploadCreateOrConnectWithoutReviewsInput
    connect?: FileUploadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutManualReviewsInput = {
    create?: XOR<UserCreateWithoutManualReviewsInput, UserUncheckedCreateWithoutManualReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManualReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type PredictionCreateNestedOneWithoutReviewInput = {
    create?: XOR<PredictionCreateWithoutReviewInput, PredictionUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutReviewInput
    connect?: PredictionWhereUniqueInput
  }

  export type FollowUpCreateNestedManyWithoutReviewInput = {
    create?: XOR<FollowUpCreateWithoutReviewInput, FollowUpUncheckedCreateWithoutReviewInput> | FollowUpCreateWithoutReviewInput[] | FollowUpUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutReviewInput | FollowUpCreateOrConnectWithoutReviewInput[]
    createMany?: FollowUpCreateManyReviewInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type PredictionUncheckedCreateNestedOneWithoutReviewInput = {
    create?: XOR<PredictionCreateWithoutReviewInput, PredictionUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutReviewInput
    connect?: PredictionWhereUniqueInput
  }

  export type FollowUpUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<FollowUpCreateWithoutReviewInput, FollowUpUncheckedCreateWithoutReviewInput> | FollowUpCreateWithoutReviewInput[] | FollowUpUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutReviewInput | FollowUpCreateOrConnectWithoutReviewInput[]
    createMany?: FollowUpCreateManyReviewInputEnvelope
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ClientCreateWithoutReviewsInput, ClientUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutReviewsInput
    upsert?: ClientUpsertWithoutReviewsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutReviewsInput, ClientUpdateWithoutReviewsInput>, ClientUncheckedUpdateWithoutReviewsInput>
  }

  export type FileUploadUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<FileUploadCreateWithoutReviewsInput, FileUploadUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: FileUploadCreateOrConnectWithoutReviewsInput
    upsert?: FileUploadUpsertWithoutReviewsInput
    disconnect?: FileUploadWhereInput | boolean
    delete?: FileUploadWhereInput | boolean
    connect?: FileUploadWhereUniqueInput
    update?: XOR<XOR<FileUploadUpdateToOneWithWhereWithoutReviewsInput, FileUploadUpdateWithoutReviewsInput>, FileUploadUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneWithoutManualReviewsNestedInput = {
    create?: XOR<UserCreateWithoutManualReviewsInput, UserUncheckedCreateWithoutManualReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManualReviewsInput
    upsert?: UserUpsertWithoutManualReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManualReviewsInput, UserUpdateWithoutManualReviewsInput>, UserUncheckedUpdateWithoutManualReviewsInput>
  }

  export type PredictionUpdateOneWithoutReviewNestedInput = {
    create?: XOR<PredictionCreateWithoutReviewInput, PredictionUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutReviewInput
    upsert?: PredictionUpsertWithoutReviewInput
    disconnect?: PredictionWhereInput | boolean
    delete?: PredictionWhereInput | boolean
    connect?: PredictionWhereUniqueInput
    update?: XOR<XOR<PredictionUpdateToOneWithWhereWithoutReviewInput, PredictionUpdateWithoutReviewInput>, PredictionUncheckedUpdateWithoutReviewInput>
  }

  export type FollowUpUpdateManyWithoutReviewNestedInput = {
    create?: XOR<FollowUpCreateWithoutReviewInput, FollowUpUncheckedCreateWithoutReviewInput> | FollowUpCreateWithoutReviewInput[] | FollowUpUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutReviewInput | FollowUpCreateOrConnectWithoutReviewInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutReviewInput | FollowUpUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: FollowUpCreateManyReviewInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutReviewInput | FollowUpUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutReviewInput | FollowUpUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type PredictionUncheckedUpdateOneWithoutReviewNestedInput = {
    create?: XOR<PredictionCreateWithoutReviewInput, PredictionUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutReviewInput
    upsert?: PredictionUpsertWithoutReviewInput
    disconnect?: PredictionWhereInput | boolean
    delete?: PredictionWhereInput | boolean
    connect?: PredictionWhereUniqueInput
    update?: XOR<XOR<PredictionUpdateToOneWithWhereWithoutReviewInput, PredictionUpdateWithoutReviewInput>, PredictionUncheckedUpdateWithoutReviewInput>
  }

  export type FollowUpUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<FollowUpCreateWithoutReviewInput, FollowUpUncheckedCreateWithoutReviewInput> | FollowUpCreateWithoutReviewInput[] | FollowUpUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: FollowUpCreateOrConnectWithoutReviewInput | FollowUpCreateOrConnectWithoutReviewInput[]
    upsert?: FollowUpUpsertWithWhereUniqueWithoutReviewInput | FollowUpUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: FollowUpCreateManyReviewInputEnvelope
    set?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    disconnect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    delete?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    connect?: FollowUpWhereUniqueInput | FollowUpWhereUniqueInput[]
    update?: FollowUpUpdateWithWhereUniqueWithoutReviewInput | FollowUpUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: FollowUpUpdateManyWithWhereWithoutReviewInput | FollowUpUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutPredictionInput = {
    create?: XOR<ReviewCreateWithoutPredictionInput, ReviewUncheckedCreateWithoutPredictionInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutPredictionInput
    connect?: ReviewWhereUniqueInput
  }

  export type HumanCorrectionCreateNestedManyWithoutPredictionInput = {
    create?: XOR<HumanCorrectionCreateWithoutPredictionInput, HumanCorrectionUncheckedCreateWithoutPredictionInput> | HumanCorrectionCreateWithoutPredictionInput[] | HumanCorrectionUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: HumanCorrectionCreateOrConnectWithoutPredictionInput | HumanCorrectionCreateOrConnectWithoutPredictionInput[]
    createMany?: HumanCorrectionCreateManyPredictionInputEnvelope
    connect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
  }

  export type RecommendationFeedbackCreateNestedManyWithoutPredictionInput = {
    create?: XOR<RecommendationFeedbackCreateWithoutPredictionInput, RecommendationFeedbackUncheckedCreateWithoutPredictionInput> | RecommendationFeedbackCreateWithoutPredictionInput[] | RecommendationFeedbackUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: RecommendationFeedbackCreateOrConnectWithoutPredictionInput | RecommendationFeedbackCreateOrConnectWithoutPredictionInput[]
    createMany?: RecommendationFeedbackCreateManyPredictionInputEnvelope
    connect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
  }

  export type HumanCorrectionUncheckedCreateNestedManyWithoutPredictionInput = {
    create?: XOR<HumanCorrectionCreateWithoutPredictionInput, HumanCorrectionUncheckedCreateWithoutPredictionInput> | HumanCorrectionCreateWithoutPredictionInput[] | HumanCorrectionUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: HumanCorrectionCreateOrConnectWithoutPredictionInput | HumanCorrectionCreateOrConnectWithoutPredictionInput[]
    createMany?: HumanCorrectionCreateManyPredictionInputEnvelope
    connect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
  }

  export type RecommendationFeedbackUncheckedCreateNestedManyWithoutPredictionInput = {
    create?: XOR<RecommendationFeedbackCreateWithoutPredictionInput, RecommendationFeedbackUncheckedCreateWithoutPredictionInput> | RecommendationFeedbackCreateWithoutPredictionInput[] | RecommendationFeedbackUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: RecommendationFeedbackCreateOrConnectWithoutPredictionInput | RecommendationFeedbackCreateOrConnectWithoutPredictionInput[]
    createMany?: RecommendationFeedbackCreateManyPredictionInputEnvelope
    connect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
  }

  export type EnumRiskLabelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLabel
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSentimentLabelFieldUpdateOperationsInput = {
    set?: $Enums.SentimentLabel
  }

  export type EnumConfidenceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ConfidenceLevel
  }

  export type ReviewUpdateOneRequiredWithoutPredictionNestedInput = {
    create?: XOR<ReviewCreateWithoutPredictionInput, ReviewUncheckedCreateWithoutPredictionInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutPredictionInput
    upsert?: ReviewUpsertWithoutPredictionInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutPredictionInput, ReviewUpdateWithoutPredictionInput>, ReviewUncheckedUpdateWithoutPredictionInput>
  }

  export type HumanCorrectionUpdateManyWithoutPredictionNestedInput = {
    create?: XOR<HumanCorrectionCreateWithoutPredictionInput, HumanCorrectionUncheckedCreateWithoutPredictionInput> | HumanCorrectionCreateWithoutPredictionInput[] | HumanCorrectionUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: HumanCorrectionCreateOrConnectWithoutPredictionInput | HumanCorrectionCreateOrConnectWithoutPredictionInput[]
    upsert?: HumanCorrectionUpsertWithWhereUniqueWithoutPredictionInput | HumanCorrectionUpsertWithWhereUniqueWithoutPredictionInput[]
    createMany?: HumanCorrectionCreateManyPredictionInputEnvelope
    set?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    disconnect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    delete?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    connect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    update?: HumanCorrectionUpdateWithWhereUniqueWithoutPredictionInput | HumanCorrectionUpdateWithWhereUniqueWithoutPredictionInput[]
    updateMany?: HumanCorrectionUpdateManyWithWhereWithoutPredictionInput | HumanCorrectionUpdateManyWithWhereWithoutPredictionInput[]
    deleteMany?: HumanCorrectionScalarWhereInput | HumanCorrectionScalarWhereInput[]
  }

  export type RecommendationFeedbackUpdateManyWithoutPredictionNestedInput = {
    create?: XOR<RecommendationFeedbackCreateWithoutPredictionInput, RecommendationFeedbackUncheckedCreateWithoutPredictionInput> | RecommendationFeedbackCreateWithoutPredictionInput[] | RecommendationFeedbackUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: RecommendationFeedbackCreateOrConnectWithoutPredictionInput | RecommendationFeedbackCreateOrConnectWithoutPredictionInput[]
    upsert?: RecommendationFeedbackUpsertWithWhereUniqueWithoutPredictionInput | RecommendationFeedbackUpsertWithWhereUniqueWithoutPredictionInput[]
    createMany?: RecommendationFeedbackCreateManyPredictionInputEnvelope
    set?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    disconnect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    delete?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    connect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    update?: RecommendationFeedbackUpdateWithWhereUniqueWithoutPredictionInput | RecommendationFeedbackUpdateWithWhereUniqueWithoutPredictionInput[]
    updateMany?: RecommendationFeedbackUpdateManyWithWhereWithoutPredictionInput | RecommendationFeedbackUpdateManyWithWhereWithoutPredictionInput[]
    deleteMany?: RecommendationFeedbackScalarWhereInput | RecommendationFeedbackScalarWhereInput[]
  }

  export type HumanCorrectionUncheckedUpdateManyWithoutPredictionNestedInput = {
    create?: XOR<HumanCorrectionCreateWithoutPredictionInput, HumanCorrectionUncheckedCreateWithoutPredictionInput> | HumanCorrectionCreateWithoutPredictionInput[] | HumanCorrectionUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: HumanCorrectionCreateOrConnectWithoutPredictionInput | HumanCorrectionCreateOrConnectWithoutPredictionInput[]
    upsert?: HumanCorrectionUpsertWithWhereUniqueWithoutPredictionInput | HumanCorrectionUpsertWithWhereUniqueWithoutPredictionInput[]
    createMany?: HumanCorrectionCreateManyPredictionInputEnvelope
    set?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    disconnect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    delete?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    connect?: HumanCorrectionWhereUniqueInput | HumanCorrectionWhereUniqueInput[]
    update?: HumanCorrectionUpdateWithWhereUniqueWithoutPredictionInput | HumanCorrectionUpdateWithWhereUniqueWithoutPredictionInput[]
    updateMany?: HumanCorrectionUpdateManyWithWhereWithoutPredictionInput | HumanCorrectionUpdateManyWithWhereWithoutPredictionInput[]
    deleteMany?: HumanCorrectionScalarWhereInput | HumanCorrectionScalarWhereInput[]
  }

  export type RecommendationFeedbackUncheckedUpdateManyWithoutPredictionNestedInput = {
    create?: XOR<RecommendationFeedbackCreateWithoutPredictionInput, RecommendationFeedbackUncheckedCreateWithoutPredictionInput> | RecommendationFeedbackCreateWithoutPredictionInput[] | RecommendationFeedbackUncheckedCreateWithoutPredictionInput[]
    connectOrCreate?: RecommendationFeedbackCreateOrConnectWithoutPredictionInput | RecommendationFeedbackCreateOrConnectWithoutPredictionInput[]
    upsert?: RecommendationFeedbackUpsertWithWhereUniqueWithoutPredictionInput | RecommendationFeedbackUpsertWithWhereUniqueWithoutPredictionInput[]
    createMany?: RecommendationFeedbackCreateManyPredictionInputEnvelope
    set?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    disconnect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    delete?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    connect?: RecommendationFeedbackWhereUniqueInput | RecommendationFeedbackWhereUniqueInput[]
    update?: RecommendationFeedbackUpdateWithWhereUniqueWithoutPredictionInput | RecommendationFeedbackUpdateWithWhereUniqueWithoutPredictionInput[]
    updateMany?: RecommendationFeedbackUpdateManyWithWhereWithoutPredictionInput | RecommendationFeedbackUpdateManyWithWhereWithoutPredictionInput[]
    deleteMany?: RecommendationFeedbackScalarWhereInput | RecommendationFeedbackScalarWhereInput[]
  }

  export type FileUploadCreateNestedOneWithoutErrorsInput = {
    create?: XOR<FileUploadCreateWithoutErrorsInput, FileUploadUncheckedCreateWithoutErrorsInput>
    connectOrCreate?: FileUploadCreateOrConnectWithoutErrorsInput
    connect?: FileUploadWhereUniqueInput
  }

  export type FileUploadUpdateOneRequiredWithoutErrorsNestedInput = {
    create?: XOR<FileUploadCreateWithoutErrorsInput, FileUploadUncheckedCreateWithoutErrorsInput>
    connectOrCreate?: FileUploadCreateOrConnectWithoutErrorsInput
    upsert?: FileUploadUpsertWithoutErrorsInput
    connect?: FileUploadWhereUniqueInput
    update?: XOR<XOR<FileUploadUpdateToOneWithWhereWithoutErrorsInput, FileUploadUpdateWithoutErrorsInput>, FileUploadUncheckedUpdateWithoutErrorsInput>
  }

  export type PredictionCreateNestedOneWithoutHumanCorrectionsInput = {
    create?: XOR<PredictionCreateWithoutHumanCorrectionsInput, PredictionUncheckedCreateWithoutHumanCorrectionsInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutHumanCorrectionsInput
    connect?: PredictionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCorrectionsInput = {
    create?: XOR<UserCreateWithoutCorrectionsInput, UserUncheckedCreateWithoutCorrectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCorrectionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumSentimentLabelFieldUpdateOperationsInput = {
    set?: $Enums.SentimentLabel | null
  }

  export type PredictionUpdateOneRequiredWithoutHumanCorrectionsNestedInput = {
    create?: XOR<PredictionCreateWithoutHumanCorrectionsInput, PredictionUncheckedCreateWithoutHumanCorrectionsInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutHumanCorrectionsInput
    upsert?: PredictionUpsertWithoutHumanCorrectionsInput
    connect?: PredictionWhereUniqueInput
    update?: XOR<XOR<PredictionUpdateToOneWithWhereWithoutHumanCorrectionsInput, PredictionUpdateWithoutHumanCorrectionsInput>, PredictionUncheckedUpdateWithoutHumanCorrectionsInput>
  }

  export type UserUpdateOneRequiredWithoutCorrectionsNestedInput = {
    create?: XOR<UserCreateWithoutCorrectionsInput, UserUncheckedCreateWithoutCorrectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCorrectionsInput
    upsert?: UserUpsertWithoutCorrectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCorrectionsInput, UserUpdateWithoutCorrectionsInput>, UserUncheckedUpdateWithoutCorrectionsInput>
  }

  export type PredictionCreateNestedOneWithoutRecommendationFeedbackInput = {
    create?: XOR<PredictionCreateWithoutRecommendationFeedbackInput, PredictionUncheckedCreateWithoutRecommendationFeedbackInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutRecommendationFeedbackInput
    connect?: PredictionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecommendationFeedbackInput = {
    create?: XOR<UserCreateWithoutRecommendationFeedbackInput, UserUncheckedCreateWithoutRecommendationFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationFeedbackInput
    connect?: UserWhereUniqueInput
  }

  export type PredictionUpdateOneRequiredWithoutRecommendationFeedbackNestedInput = {
    create?: XOR<PredictionCreateWithoutRecommendationFeedbackInput, PredictionUncheckedCreateWithoutRecommendationFeedbackInput>
    connectOrCreate?: PredictionCreateOrConnectWithoutRecommendationFeedbackInput
    upsert?: PredictionUpsertWithoutRecommendationFeedbackInput
    connect?: PredictionWhereUniqueInput
    update?: XOR<XOR<PredictionUpdateToOneWithWhereWithoutRecommendationFeedbackInput, PredictionUpdateWithoutRecommendationFeedbackInput>, PredictionUncheckedUpdateWithoutRecommendationFeedbackInput>
  }

  export type UserUpdateOneRequiredWithoutRecommendationFeedbackNestedInput = {
    create?: XOR<UserCreateWithoutRecommendationFeedbackInput, UserUncheckedCreateWithoutRecommendationFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationFeedbackInput
    upsert?: UserUpsertWithoutRecommendationFeedbackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecommendationFeedbackInput, UserUpdateWithoutRecommendationFeedbackInput>, UserUncheckedUpdateWithoutRecommendationFeedbackInput>
  }

  export type ClientCreateNestedOneWithoutFollowUpsInput = {
    create?: XOR<ClientCreateWithoutFollowUpsInput, ClientUncheckedCreateWithoutFollowUpsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutFollowUpsInput
    connect?: ClientWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutFollowUpsInput = {
    create?: XOR<ReviewCreateWithoutFollowUpsInput, ReviewUncheckedCreateWithoutFollowUpsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutFollowUpsInput
    connect?: ReviewWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedFollowUpsInput = {
    create?: XOR<UserCreateWithoutAssignedFollowUpsInput, UserUncheckedCreateWithoutAssignedFollowUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedFollowUpsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedFollowUpsInput = {
    create?: XOR<UserCreateWithoutCreatedFollowUpsInput, UserUncheckedCreateWithoutCreatedFollowUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedFollowUpsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFollowUpStatusFieldUpdateOperationsInput = {
    set?: $Enums.FollowUpStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClientUpdateOneWithoutFollowUpsNestedInput = {
    create?: XOR<ClientCreateWithoutFollowUpsInput, ClientUncheckedCreateWithoutFollowUpsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutFollowUpsInput
    upsert?: ClientUpsertWithoutFollowUpsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutFollowUpsInput, ClientUpdateWithoutFollowUpsInput>, ClientUncheckedUpdateWithoutFollowUpsInput>
  }

  export type ReviewUpdateOneWithoutFollowUpsNestedInput = {
    create?: XOR<ReviewCreateWithoutFollowUpsInput, ReviewUncheckedCreateWithoutFollowUpsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutFollowUpsInput
    upsert?: ReviewUpsertWithoutFollowUpsInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutFollowUpsInput, ReviewUpdateWithoutFollowUpsInput>, ReviewUncheckedUpdateWithoutFollowUpsInput>
  }

  export type UserUpdateOneWithoutAssignedFollowUpsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedFollowUpsInput, UserUncheckedCreateWithoutAssignedFollowUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedFollowUpsInput
    upsert?: UserUpsertWithoutAssignedFollowUpsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedFollowUpsInput, UserUpdateWithoutAssignedFollowUpsInput>, UserUncheckedUpdateWithoutAssignedFollowUpsInput>
  }

  export type UserUpdateOneWithoutCreatedFollowUpsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedFollowUpsInput, UserUncheckedCreateWithoutCreatedFollowUpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedFollowUpsInput
    upsert?: UserUpsertWithoutCreatedFollowUpsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedFollowUpsInput, UserUpdateWithoutCreatedFollowUpsInput>, UserUncheckedUpdateWithoutCreatedFollowUpsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName | null
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumClientRiskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientRiskStatus | EnumClientRiskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientRiskStatus[] | ListEnumClientRiskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientRiskStatus[] | ListEnumClientRiskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientRiskStatusFilter<$PrismaModel> | $Enums.ClientRiskStatus
  }

  export type NestedEnumClientRiskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientRiskStatus | EnumClientRiskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientRiskStatus[] | ListEnumClientRiskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientRiskStatus[] | ListEnumClientRiskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientRiskStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientRiskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientRiskStatusFilter<$PrismaModel>
    _max?: NestedEnumClientRiskStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRiskLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLabel | EnumRiskLabelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLabel[] | ListEnumRiskLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLabel[] | ListEnumRiskLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLabelFilter<$PrismaModel> | $Enums.RiskLabel
  }

  export type NestedEnumSentimentLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentLabelFilter<$PrismaModel> | $Enums.SentimentLabel
  }

  export type NestedEnumConfidenceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfidenceLevel | EnumConfidenceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceLevelFilter<$PrismaModel> | $Enums.ConfidenceLevel
  }

  export type NestedEnumRiskLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLabel | EnumRiskLabelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLabel[] | ListEnumRiskLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLabel[] | ListEnumRiskLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLabelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLabelFilter<$PrismaModel>
    _max?: NestedEnumRiskLabelFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSentimentLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentLabelWithAggregatesFilter<$PrismaModel> | $Enums.SentimentLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentimentLabelFilter<$PrismaModel>
    _max?: NestedEnumSentimentLabelFilter<$PrismaModel>
  }

  export type NestedEnumConfidenceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConfidenceLevel | EnumConfidenceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConfidenceLevel[] | ListEnumConfidenceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ConfidenceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConfidenceLevelFilter<$PrismaModel>
    _max?: NestedEnumConfidenceLevelFilter<$PrismaModel>
  }

  export type NestedEnumSentimentLabelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel> | null
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSentimentLabelNullableFilter<$PrismaModel> | $Enums.SentimentLabel | null
  }

  export type NestedEnumSentimentLabelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel> | null
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSentimentLabelNullableWithAggregatesFilter<$PrismaModel> | $Enums.SentimentLabel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSentimentLabelNullableFilter<$PrismaModel>
    _max?: NestedEnumSentimentLabelNullableFilter<$PrismaModel>
  }

  export type NestedEnumFollowUpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpStatus | EnumFollowUpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowUpStatus[] | ListEnumFollowUpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowUpStatus[] | ListEnumFollowUpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowUpStatusFilter<$PrismaModel> | $Enums.FollowUpStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumFollowUpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpStatus | EnumFollowUpStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowUpStatus[] | ListEnumFollowUpStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowUpStatus[] | ListEnumFollowUpStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowUpStatusWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFollowUpStatusFilter<$PrismaModel>
    _max?: NestedEnumFollowUpStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNameNullableFilter<$PrismaModel> | $Enums.RoleName | null
  }

  export type NestedEnumRoleNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.RoleName | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNameNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNameNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewUncheckedCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpUncheckedCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: $Enums.RoleName
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type FileUploadCreateWithoutUploadedByInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutFileUploadInput
    errors?: UploadErrorCreateNestedManyWithoutFileUploadInput
  }

  export type FileUploadUncheckedCreateWithoutUploadedByInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutFileUploadInput
    errors?: UploadErrorUncheckedCreateNestedManyWithoutFileUploadInput
  }

  export type FileUploadCreateOrConnectWithoutUploadedByInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutUploadedByInput, FileUploadUncheckedCreateWithoutUploadedByInput>
  }

  export type FileUploadCreateManyUploadedByInputEnvelope = {
    data: FileUploadCreateManyUploadedByInput | FileUploadCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutCreatedByInput = {
    id?: string
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutReviewsInput
    fileUpload?: FileUploadCreateNestedOneWithoutReviewsInput
    prediction?: PredictionCreateNestedOneWithoutReviewInput
    followUps?: FollowUpCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutCreatedByInput = {
    id?: string
    clientId: string
    fileUploadId?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction?: PredictionUncheckedCreateNestedOneWithoutReviewInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutCreatedByInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCreatedByInput, ReviewUncheckedCreateWithoutCreatedByInput>
  }

  export type ReviewCreateManyCreatedByInputEnvelope = {
    data: ReviewCreateManyCreatedByInput | ReviewCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type HumanCorrectionCreateWithoutCorrectedByInput = {
    id?: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction: PredictionCreateNestedOneWithoutHumanCorrectionsInput
  }

  export type HumanCorrectionUncheckedCreateWithoutCorrectedByInput = {
    id?: string
    predictionId: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HumanCorrectionCreateOrConnectWithoutCorrectedByInput = {
    where: HumanCorrectionWhereUniqueInput
    create: XOR<HumanCorrectionCreateWithoutCorrectedByInput, HumanCorrectionUncheckedCreateWithoutCorrectedByInput>
  }

  export type HumanCorrectionCreateManyCorrectedByInputEnvelope = {
    data: HumanCorrectionCreateManyCorrectedByInput | HumanCorrectionCreateManyCorrectedByInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationFeedbackCreateWithoutUserInput = {
    id?: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction: PredictionCreateNestedOneWithoutRecommendationFeedbackInput
  }

  export type RecommendationFeedbackUncheckedCreateWithoutUserInput = {
    id?: string
    predictionId: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationFeedbackCreateOrConnectWithoutUserInput = {
    where: RecommendationFeedbackWhereUniqueInput
    create: XOR<RecommendationFeedbackCreateWithoutUserInput, RecommendationFeedbackUncheckedCreateWithoutUserInput>
  }

  export type RecommendationFeedbackCreateManyUserInputEnvelope = {
    data: RecommendationFeedbackCreateManyUserInput | RecommendationFeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowUpCreateWithoutAssignedToInput = {
    id?: string
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutFollowUpsInput
    review?: ReviewCreateNestedOneWithoutFollowUpsInput
    createdBy?: UserCreateNestedOneWithoutCreatedFollowUpsInput
  }

  export type FollowUpUncheckedCreateWithoutAssignedToInput = {
    id?: string
    clientId?: string | null
    reviewId?: string | null
    createdById?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpCreateOrConnectWithoutAssignedToInput = {
    where: FollowUpWhereUniqueInput
    create: XOR<FollowUpCreateWithoutAssignedToInput, FollowUpUncheckedCreateWithoutAssignedToInput>
  }

  export type FollowUpCreateManyAssignedToInputEnvelope = {
    data: FollowUpCreateManyAssignedToInput | FollowUpCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type FollowUpCreateWithoutCreatedByInput = {
    id?: string
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutFollowUpsInput
    review?: ReviewCreateNestedOneWithoutFollowUpsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedFollowUpsInput
  }

  export type FollowUpUncheckedCreateWithoutCreatedByInput = {
    id?: string
    clientId?: string | null
    reviewId?: string | null
    assignedToId?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpCreateOrConnectWithoutCreatedByInput = {
    where: FollowUpWhereUniqueInput
    create: XOR<FollowUpCreateWithoutCreatedByInput, FollowUpUncheckedCreateWithoutCreatedByInput>
  }

  export type FollowUpCreateManyCreatedByInputEnvelope = {
    data: FollowUpCreateManyCreatedByInput | FollowUpCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    roleName?: $Enums.RoleName | null
    action: string
    entityType: string
    entityId?: string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    roleName?: $Enums.RoleName | null
    action: string
    entityType: string
    entityId?: string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: FileUploadWhereUniqueInput
    update: XOR<FileUploadUpdateWithoutUploadedByInput, FileUploadUncheckedUpdateWithoutUploadedByInput>
    create: XOR<FileUploadCreateWithoutUploadedByInput, FileUploadUncheckedCreateWithoutUploadedByInput>
  }

  export type FileUploadUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: FileUploadWhereUniqueInput
    data: XOR<FileUploadUpdateWithoutUploadedByInput, FileUploadUncheckedUpdateWithoutUploadedByInput>
  }

  export type FileUploadUpdateManyWithWhereWithoutUploadedByInput = {
    where: FileUploadScalarWhereInput
    data: XOR<FileUploadUpdateManyMutationInput, FileUploadUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type FileUploadScalarWhereInput = {
    AND?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    OR?: FileUploadScalarWhereInput[]
    NOT?: FileUploadScalarWhereInput | FileUploadScalarWhereInput[]
    id?: StringFilter<"FileUpload"> | string
    originalFileName?: StringFilter<"FileUpload"> | string
    storedFileName?: StringNullableFilter<"FileUpload"> | string | null
    mimeType?: StringNullableFilter<"FileUpload"> | string | null
    status?: StringFilter<"FileUpload"> | string
    totalRows?: IntFilter<"FileUpload"> | number
    validRows?: IntFilter<"FileUpload"> | number
    invalidRows?: IntFilter<"FileUpload"> | number
    warnings?: JsonNullableFilter<"FileUpload">
    uploadedById?: StringNullableFilter<"FileUpload"> | string | null
    createdAt?: DateTimeFilter<"FileUpload"> | Date | string
    updatedAt?: DateTimeFilter<"FileUpload"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCreatedByInput, ReviewUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ReviewCreateWithoutCreatedByInput, ReviewUncheckedCreateWithoutCreatedByInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCreatedByInput, ReviewUncheckedUpdateWithoutCreatedByInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCreatedByInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    clientId?: StringFilter<"Review"> | string
    fileUploadId?: StringNullableFilter<"Review"> | string | null
    createdById?: StringNullableFilter<"Review"> | string | null
    sourceRecordId?: StringNullableFilter<"Review"> | string | null
    reviewDate?: DateTimeFilter<"Review"> | Date | string
    year?: IntNullableFilter<"Review"> | number | null
    quarter?: StringNullableFilter<"Review"> | string | null
    month?: StringNullableFilter<"Review"> | string | null
    source?: StringNullableFilter<"Review"> | string | null
    comment?: StringFilter<"Review"> | string
    originalSentiment?: StringNullableFilter<"Review"> | string | null
    category?: StringFilter<"Review"> | string
    subcategory?: StringFilter<"Review"> | string
    product?: StringNullableFilter<"Review"> | string | null
    detail?: StringNullableFilter<"Review"> | string | null
    originalClassification?: StringFilter<"Review"> | string
    npsScore?: IntNullableFilter<"Review"> | number | null
    rawData?: JsonNullableFilter<"Review">
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type HumanCorrectionUpsertWithWhereUniqueWithoutCorrectedByInput = {
    where: HumanCorrectionWhereUniqueInput
    update: XOR<HumanCorrectionUpdateWithoutCorrectedByInput, HumanCorrectionUncheckedUpdateWithoutCorrectedByInput>
    create: XOR<HumanCorrectionCreateWithoutCorrectedByInput, HumanCorrectionUncheckedCreateWithoutCorrectedByInput>
  }

  export type HumanCorrectionUpdateWithWhereUniqueWithoutCorrectedByInput = {
    where: HumanCorrectionWhereUniqueInput
    data: XOR<HumanCorrectionUpdateWithoutCorrectedByInput, HumanCorrectionUncheckedUpdateWithoutCorrectedByInput>
  }

  export type HumanCorrectionUpdateManyWithWhereWithoutCorrectedByInput = {
    where: HumanCorrectionScalarWhereInput
    data: XOR<HumanCorrectionUpdateManyMutationInput, HumanCorrectionUncheckedUpdateManyWithoutCorrectedByInput>
  }

  export type HumanCorrectionScalarWhereInput = {
    AND?: HumanCorrectionScalarWhereInput | HumanCorrectionScalarWhereInput[]
    OR?: HumanCorrectionScalarWhereInput[]
    NOT?: HumanCorrectionScalarWhereInput | HumanCorrectionScalarWhereInput[]
    id?: StringFilter<"HumanCorrection"> | string
    predictionId?: StringFilter<"HumanCorrection"> | string
    correctedById?: StringFilter<"HumanCorrection"> | string
    originalRiskLabel?: EnumRiskLabelFilter<"HumanCorrection"> | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFilter<"HumanCorrection"> | $Enums.RiskLabel
    originalSentiment?: EnumSentimentLabelNullableFilter<"HumanCorrection"> | $Enums.SentimentLabel | null
    correctedSentiment?: EnumSentimentLabelNullableFilter<"HumanCorrection"> | $Enums.SentimentLabel | null
    originalPrimaryCause?: StringNullableFilter<"HumanCorrection"> | string | null
    correctedPrimaryCause?: StringNullableFilter<"HumanCorrection"> | string | null
    reason?: StringNullableFilter<"HumanCorrection"> | string | null
    createdAt?: DateTimeFilter<"HumanCorrection"> | Date | string
    updatedAt?: DateTimeFilter<"HumanCorrection"> | Date | string
  }

  export type RecommendationFeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendationFeedbackWhereUniqueInput
    update: XOR<RecommendationFeedbackUpdateWithoutUserInput, RecommendationFeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<RecommendationFeedbackCreateWithoutUserInput, RecommendationFeedbackUncheckedCreateWithoutUserInput>
  }

  export type RecommendationFeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendationFeedbackWhereUniqueInput
    data: XOR<RecommendationFeedbackUpdateWithoutUserInput, RecommendationFeedbackUncheckedUpdateWithoutUserInput>
  }

  export type RecommendationFeedbackUpdateManyWithWhereWithoutUserInput = {
    where: RecommendationFeedbackScalarWhereInput
    data: XOR<RecommendationFeedbackUpdateManyMutationInput, RecommendationFeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type RecommendationFeedbackScalarWhereInput = {
    AND?: RecommendationFeedbackScalarWhereInput | RecommendationFeedbackScalarWhereInput[]
    OR?: RecommendationFeedbackScalarWhereInput[]
    NOT?: RecommendationFeedbackScalarWhereInput | RecommendationFeedbackScalarWhereInput[]
    id?: StringFilter<"RecommendationFeedback"> | string
    predictionId?: StringFilter<"RecommendationFeedback"> | string
    userId?: StringFilter<"RecommendationFeedback"> | string
    isUseful?: BoolFilter<"RecommendationFeedback"> | boolean
    comment?: StringNullableFilter<"RecommendationFeedback"> | string | null
    createdAt?: DateTimeFilter<"RecommendationFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"RecommendationFeedback"> | Date | string
  }

  export type FollowUpUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: FollowUpWhereUniqueInput
    update: XOR<FollowUpUpdateWithoutAssignedToInput, FollowUpUncheckedUpdateWithoutAssignedToInput>
    create: XOR<FollowUpCreateWithoutAssignedToInput, FollowUpUncheckedCreateWithoutAssignedToInput>
  }

  export type FollowUpUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: FollowUpWhereUniqueInput
    data: XOR<FollowUpUpdateWithoutAssignedToInput, FollowUpUncheckedUpdateWithoutAssignedToInput>
  }

  export type FollowUpUpdateManyWithWhereWithoutAssignedToInput = {
    where: FollowUpScalarWhereInput
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type FollowUpScalarWhereInput = {
    AND?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
    OR?: FollowUpScalarWhereInput[]
    NOT?: FollowUpScalarWhereInput | FollowUpScalarWhereInput[]
    id?: StringFilter<"FollowUp"> | string
    clientId?: StringNullableFilter<"FollowUp"> | string | null
    reviewId?: StringNullableFilter<"FollowUp"> | string | null
    assignedToId?: StringNullableFilter<"FollowUp"> | string | null
    createdById?: StringNullableFilter<"FollowUp"> | string | null
    status?: EnumFollowUpStatusFilter<"FollowUp"> | $Enums.FollowUpStatus
    contactDate?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    actionTaken?: StringNullableFilter<"FollowUp"> | string | null
    escalatedArea?: StringNullableFilter<"FollowUp"> | string | null
    contactResult?: StringNullableFilter<"FollowUp"> | string | null
    note?: StringNullableFilter<"FollowUp"> | string | null
    closingNote?: StringNullableFilter<"FollowUp"> | string | null
    closedAt?: DateTimeNullableFilter<"FollowUp"> | Date | string | null
    createdAt?: DateTimeFilter<"FollowUp"> | Date | string
    updatedAt?: DateTimeFilter<"FollowUp"> | Date | string
  }

  export type FollowUpUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: FollowUpWhereUniqueInput
    update: XOR<FollowUpUpdateWithoutCreatedByInput, FollowUpUncheckedUpdateWithoutCreatedByInput>
    create: XOR<FollowUpCreateWithoutCreatedByInput, FollowUpUncheckedCreateWithoutCreatedByInput>
  }

  export type FollowUpUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: FollowUpWhereUniqueInput
    data: XOR<FollowUpUpdateWithoutCreatedByInput, FollowUpUncheckedUpdateWithoutCreatedByInput>
  }

  export type FollowUpUpdateManyWithWhereWithoutCreatedByInput = {
    where: FollowUpScalarWhereInput
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    roleName?: EnumRoleNameNullableFilter<"AuditLog"> | $Enums.RoleName | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    previousValues?: JsonNullableFilter<"AuditLog">
    newValues?: JsonNullableFilter<"AuditLog">
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type ReviewCreateWithoutClientInput = {
    id?: string
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fileUpload?: FileUploadCreateNestedOneWithoutReviewsInput
    createdBy?: UserCreateNestedOneWithoutManualReviewsInput
    prediction?: PredictionCreateNestedOneWithoutReviewInput
    followUps?: FollowUpCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutClientInput = {
    id?: string
    fileUploadId?: string | null
    createdById?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction?: PredictionUncheckedCreateNestedOneWithoutReviewInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutClientInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput>
  }

  export type ReviewCreateManyClientInputEnvelope = {
    data: ReviewCreateManyClientInput | ReviewCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type FollowUpCreateWithoutClientInput = {
    id?: string
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewCreateNestedOneWithoutFollowUpsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedFollowUpsInput
    createdBy?: UserCreateNestedOneWithoutCreatedFollowUpsInput
  }

  export type FollowUpUncheckedCreateWithoutClientInput = {
    id?: string
    reviewId?: string | null
    assignedToId?: string | null
    createdById?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpCreateOrConnectWithoutClientInput = {
    where: FollowUpWhereUniqueInput
    create: XOR<FollowUpCreateWithoutClientInput, FollowUpUncheckedCreateWithoutClientInput>
  }

  export type FollowUpCreateManyClientInputEnvelope = {
    data: FollowUpCreateManyClientInput | FollowUpCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutClientInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutClientInput, ReviewUncheckedUpdateWithoutClientInput>
    create: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutClientInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutClientInput, ReviewUncheckedUpdateWithoutClientInput>
  }

  export type ReviewUpdateManyWithWhereWithoutClientInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutClientInput>
  }

  export type FollowUpUpsertWithWhereUniqueWithoutClientInput = {
    where: FollowUpWhereUniqueInput
    update: XOR<FollowUpUpdateWithoutClientInput, FollowUpUncheckedUpdateWithoutClientInput>
    create: XOR<FollowUpCreateWithoutClientInput, FollowUpUncheckedCreateWithoutClientInput>
  }

  export type FollowUpUpdateWithWhereUniqueWithoutClientInput = {
    where: FollowUpWhereUniqueInput
    data: XOR<FollowUpUpdateWithoutClientInput, FollowUpUncheckedUpdateWithoutClientInput>
  }

  export type FollowUpUpdateManyWithWhereWithoutClientInput = {
    where: FollowUpScalarWhereInput
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyWithoutClientInput>
  }

  export type UserCreateWithoutUploadedFilesInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    manualReviews?: ReviewCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUploadedFilesInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    manualReviews?: ReviewUncheckedCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpUncheckedCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUploadedFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
  }

  export type ReviewCreateWithoutFileUploadInput = {
    id?: string
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutReviewsInput
    createdBy?: UserCreateNestedOneWithoutManualReviewsInput
    prediction?: PredictionCreateNestedOneWithoutReviewInput
    followUps?: FollowUpCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutFileUploadInput = {
    id?: string
    clientId: string
    createdById?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction?: PredictionUncheckedCreateNestedOneWithoutReviewInput
    followUps?: FollowUpUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutFileUploadInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutFileUploadInput, ReviewUncheckedCreateWithoutFileUploadInput>
  }

  export type ReviewCreateManyFileUploadInputEnvelope = {
    data: ReviewCreateManyFileUploadInput | ReviewCreateManyFileUploadInput[]
    skipDuplicates?: boolean
  }

  export type UploadErrorCreateWithoutFileUploadInput = {
    id?: string
    rowNumber: number
    sourceRecordId?: string | null
    reason: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadErrorUncheckedCreateWithoutFileUploadInput = {
    id?: string
    rowNumber: number
    sourceRecordId?: string | null
    reason: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadErrorCreateOrConnectWithoutFileUploadInput = {
    where: UploadErrorWhereUniqueInput
    create: XOR<UploadErrorCreateWithoutFileUploadInput, UploadErrorUncheckedCreateWithoutFileUploadInput>
  }

  export type UploadErrorCreateManyFileUploadInputEnvelope = {
    data: UploadErrorCreateManyFileUploadInput | UploadErrorCreateManyFileUploadInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUploadedFilesInput = {
    update: XOR<UserUpdateWithoutUploadedFilesInput, UserUncheckedUpdateWithoutUploadedFilesInput>
    create: XOR<UserCreateWithoutUploadedFilesInput, UserUncheckedCreateWithoutUploadedFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedFilesInput, UserUncheckedUpdateWithoutUploadedFilesInput>
  }

  export type UserUpdateWithoutUploadedFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    manualReviews?: ReviewUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manualReviews?: ReviewUncheckedUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutFileUploadInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutFileUploadInput, ReviewUncheckedUpdateWithoutFileUploadInput>
    create: XOR<ReviewCreateWithoutFileUploadInput, ReviewUncheckedCreateWithoutFileUploadInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutFileUploadInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutFileUploadInput, ReviewUncheckedUpdateWithoutFileUploadInput>
  }

  export type ReviewUpdateManyWithWhereWithoutFileUploadInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutFileUploadInput>
  }

  export type UploadErrorUpsertWithWhereUniqueWithoutFileUploadInput = {
    where: UploadErrorWhereUniqueInput
    update: XOR<UploadErrorUpdateWithoutFileUploadInput, UploadErrorUncheckedUpdateWithoutFileUploadInput>
    create: XOR<UploadErrorCreateWithoutFileUploadInput, UploadErrorUncheckedCreateWithoutFileUploadInput>
  }

  export type UploadErrorUpdateWithWhereUniqueWithoutFileUploadInput = {
    where: UploadErrorWhereUniqueInput
    data: XOR<UploadErrorUpdateWithoutFileUploadInput, UploadErrorUncheckedUpdateWithoutFileUploadInput>
  }

  export type UploadErrorUpdateManyWithWhereWithoutFileUploadInput = {
    where: UploadErrorScalarWhereInput
    data: XOR<UploadErrorUpdateManyMutationInput, UploadErrorUncheckedUpdateManyWithoutFileUploadInput>
  }

  export type UploadErrorScalarWhereInput = {
    AND?: UploadErrorScalarWhereInput | UploadErrorScalarWhereInput[]
    OR?: UploadErrorScalarWhereInput[]
    NOT?: UploadErrorScalarWhereInput | UploadErrorScalarWhereInput[]
    id?: StringFilter<"UploadError"> | string
    fileUploadId?: StringFilter<"UploadError"> | string
    rowNumber?: IntFilter<"UploadError"> | number
    sourceRecordId?: StringNullableFilter<"UploadError"> | string | null
    reason?: StringFilter<"UploadError"> | string
    rawData?: JsonNullableFilter<"UploadError">
    createdAt?: DateTimeFilter<"UploadError"> | Date | string
    updatedAt?: DateTimeFilter<"UploadError"> | Date | string
  }

  export type ClientCreateWithoutReviewsInput = {
    id?: string
    name: string
    externalRef?: string | null
    riskStatus?: $Enums.ClientRiskStatus
    accumulatedRiskScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    followUps?: FollowUpCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    externalRef?: string | null
    riskStatus?: $Enums.ClientRiskStatus
    accumulatedRiskScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    followUps?: FollowUpUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutReviewsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutReviewsInput, ClientUncheckedCreateWithoutReviewsInput>
  }

  export type FileUploadCreateWithoutReviewsInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedBy?: UserCreateNestedOneWithoutUploadedFilesInput
    errors?: UploadErrorCreateNestedManyWithoutFileUploadInput
  }

  export type FileUploadUncheckedCreateWithoutReviewsInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    uploadedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    errors?: UploadErrorUncheckedCreateNestedManyWithoutFileUploadInput
  }

  export type FileUploadCreateOrConnectWithoutReviewsInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutReviewsInput, FileUploadUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutManualReviewsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUploadedByInput
    corrections?: HumanCorrectionCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManualReviewsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUploadedByInput
    corrections?: HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpUncheckedCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManualReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManualReviewsInput, UserUncheckedCreateWithoutManualReviewsInput>
  }

  export type PredictionCreateWithoutReviewInput = {
    id?: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    humanCorrections?: HumanCorrectionCreateNestedManyWithoutPredictionInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUncheckedCreateWithoutReviewInput = {
    id?: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    humanCorrections?: HumanCorrectionUncheckedCreateNestedManyWithoutPredictionInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutPredictionInput
  }

  export type PredictionCreateOrConnectWithoutReviewInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutReviewInput, PredictionUncheckedCreateWithoutReviewInput>
  }

  export type FollowUpCreateWithoutReviewInput = {
    id?: string
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutFollowUpsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedFollowUpsInput
    createdBy?: UserCreateNestedOneWithoutCreatedFollowUpsInput
  }

  export type FollowUpUncheckedCreateWithoutReviewInput = {
    id?: string
    clientId?: string | null
    assignedToId?: string | null
    createdById?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpCreateOrConnectWithoutReviewInput = {
    where: FollowUpWhereUniqueInput
    create: XOR<FollowUpCreateWithoutReviewInput, FollowUpUncheckedCreateWithoutReviewInput>
  }

  export type FollowUpCreateManyReviewInputEnvelope = {
    data: FollowUpCreateManyReviewInput | FollowUpCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutReviewsInput = {
    update: XOR<ClientUpdateWithoutReviewsInput, ClientUncheckedUpdateWithoutReviewsInput>
    create: XOR<ClientCreateWithoutReviewsInput, ClientUncheckedCreateWithoutReviewsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutReviewsInput, ClientUncheckedUpdateWithoutReviewsInput>
  }

  export type ClientUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    riskStatus?: EnumClientRiskStatusFieldUpdateOperationsInput | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followUps?: FollowUpUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    riskStatus?: EnumClientRiskStatusFieldUpdateOperationsInput | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followUps?: FollowUpUncheckedUpdateManyWithoutClientNestedInput
  }

  export type FileUploadUpsertWithoutReviewsInput = {
    update: XOR<FileUploadUpdateWithoutReviewsInput, FileUploadUncheckedUpdateWithoutReviewsInput>
    create: XOR<FileUploadCreateWithoutReviewsInput, FileUploadUncheckedCreateWithoutReviewsInput>
    where?: FileUploadWhereInput
  }

  export type FileUploadUpdateToOneWithWhereWithoutReviewsInput = {
    where?: FileUploadWhereInput
    data: XOR<FileUploadUpdateWithoutReviewsInput, FileUploadUncheckedUpdateWithoutReviewsInput>
  }

  export type FileUploadUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneWithoutUploadedFilesNestedInput
    errors?: UploadErrorUpdateManyWithoutFileUploadNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errors?: UploadErrorUncheckedUpdateManyWithoutFileUploadNestedInput
  }

  export type UserUpsertWithoutManualReviewsInput = {
    update: XOR<UserUpdateWithoutManualReviewsInput, UserUncheckedUpdateWithoutManualReviewsInput>
    create: XOR<UserCreateWithoutManualReviewsInput, UserUncheckedCreateWithoutManualReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManualReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManualReviewsInput, UserUncheckedUpdateWithoutManualReviewsInput>
  }

  export type UserUpdateWithoutManualReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUploadedByNestedInput
    corrections?: HumanCorrectionUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManualReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput
    corrections?: HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PredictionUpsertWithoutReviewInput = {
    update: XOR<PredictionUpdateWithoutReviewInput, PredictionUncheckedUpdateWithoutReviewInput>
    create: XOR<PredictionCreateWithoutReviewInput, PredictionUncheckedCreateWithoutReviewInput>
    where?: PredictionWhereInput
  }

  export type PredictionUpdateToOneWithWhereWithoutReviewInput = {
    where?: PredictionWhereInput
    data: XOR<PredictionUpdateWithoutReviewInput, PredictionUncheckedUpdateWithoutReviewInput>
  }

  export type PredictionUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    humanCorrections?: HumanCorrectionUpdateManyWithoutPredictionNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    humanCorrections?: HumanCorrectionUncheckedUpdateManyWithoutPredictionNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutPredictionNestedInput
  }

  export type FollowUpUpsertWithWhereUniqueWithoutReviewInput = {
    where: FollowUpWhereUniqueInput
    update: XOR<FollowUpUpdateWithoutReviewInput, FollowUpUncheckedUpdateWithoutReviewInput>
    create: XOR<FollowUpCreateWithoutReviewInput, FollowUpUncheckedCreateWithoutReviewInput>
  }

  export type FollowUpUpdateWithWhereUniqueWithoutReviewInput = {
    where: FollowUpWhereUniqueInput
    data: XOR<FollowUpUpdateWithoutReviewInput, FollowUpUncheckedUpdateWithoutReviewInput>
  }

  export type FollowUpUpdateManyWithWhereWithoutReviewInput = {
    where: FollowUpScalarWhereInput
    data: XOR<FollowUpUpdateManyMutationInput, FollowUpUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewCreateWithoutPredictionInput = {
    id?: string
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutReviewsInput
    fileUpload?: FileUploadCreateNestedOneWithoutReviewsInput
    createdBy?: UserCreateNestedOneWithoutManualReviewsInput
    followUps?: FollowUpCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutPredictionInput = {
    id?: string
    clientId: string
    fileUploadId?: string | null
    createdById?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    followUps?: FollowUpUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutPredictionInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPredictionInput, ReviewUncheckedCreateWithoutPredictionInput>
  }

  export type HumanCorrectionCreateWithoutPredictionInput = {
    id?: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    correctedBy: UserCreateNestedOneWithoutCorrectionsInput
  }

  export type HumanCorrectionUncheckedCreateWithoutPredictionInput = {
    id?: string
    correctedById: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HumanCorrectionCreateOrConnectWithoutPredictionInput = {
    where: HumanCorrectionWhereUniqueInput
    create: XOR<HumanCorrectionCreateWithoutPredictionInput, HumanCorrectionUncheckedCreateWithoutPredictionInput>
  }

  export type HumanCorrectionCreateManyPredictionInputEnvelope = {
    data: HumanCorrectionCreateManyPredictionInput | HumanCorrectionCreateManyPredictionInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationFeedbackCreateWithoutPredictionInput = {
    id?: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecommendationFeedbackInput
  }

  export type RecommendationFeedbackUncheckedCreateWithoutPredictionInput = {
    id?: string
    userId: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationFeedbackCreateOrConnectWithoutPredictionInput = {
    where: RecommendationFeedbackWhereUniqueInput
    create: XOR<RecommendationFeedbackCreateWithoutPredictionInput, RecommendationFeedbackUncheckedCreateWithoutPredictionInput>
  }

  export type RecommendationFeedbackCreateManyPredictionInputEnvelope = {
    data: RecommendationFeedbackCreateManyPredictionInput | RecommendationFeedbackCreateManyPredictionInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithoutPredictionInput = {
    update: XOR<ReviewUpdateWithoutPredictionInput, ReviewUncheckedUpdateWithoutPredictionInput>
    create: XOR<ReviewCreateWithoutPredictionInput, ReviewUncheckedCreateWithoutPredictionInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutPredictionInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutPredictionInput, ReviewUncheckedUpdateWithoutPredictionInput>
  }

  export type ReviewUpdateWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutReviewsNestedInput
    fileUpload?: FileUploadUpdateOneWithoutReviewsNestedInput
    createdBy?: UserUpdateOneWithoutManualReviewsNestedInput
    followUps?: FollowUpUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    fileUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followUps?: FollowUpUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type HumanCorrectionUpsertWithWhereUniqueWithoutPredictionInput = {
    where: HumanCorrectionWhereUniqueInput
    update: XOR<HumanCorrectionUpdateWithoutPredictionInput, HumanCorrectionUncheckedUpdateWithoutPredictionInput>
    create: XOR<HumanCorrectionCreateWithoutPredictionInput, HumanCorrectionUncheckedCreateWithoutPredictionInput>
  }

  export type HumanCorrectionUpdateWithWhereUniqueWithoutPredictionInput = {
    where: HumanCorrectionWhereUniqueInput
    data: XOR<HumanCorrectionUpdateWithoutPredictionInput, HumanCorrectionUncheckedUpdateWithoutPredictionInput>
  }

  export type HumanCorrectionUpdateManyWithWhereWithoutPredictionInput = {
    where: HumanCorrectionScalarWhereInput
    data: XOR<HumanCorrectionUpdateManyMutationInput, HumanCorrectionUncheckedUpdateManyWithoutPredictionInput>
  }

  export type RecommendationFeedbackUpsertWithWhereUniqueWithoutPredictionInput = {
    where: RecommendationFeedbackWhereUniqueInput
    update: XOR<RecommendationFeedbackUpdateWithoutPredictionInput, RecommendationFeedbackUncheckedUpdateWithoutPredictionInput>
    create: XOR<RecommendationFeedbackCreateWithoutPredictionInput, RecommendationFeedbackUncheckedCreateWithoutPredictionInput>
  }

  export type RecommendationFeedbackUpdateWithWhereUniqueWithoutPredictionInput = {
    where: RecommendationFeedbackWhereUniqueInput
    data: XOR<RecommendationFeedbackUpdateWithoutPredictionInput, RecommendationFeedbackUncheckedUpdateWithoutPredictionInput>
  }

  export type RecommendationFeedbackUpdateManyWithWhereWithoutPredictionInput = {
    where: RecommendationFeedbackScalarWhereInput
    data: XOR<RecommendationFeedbackUpdateManyMutationInput, RecommendationFeedbackUncheckedUpdateManyWithoutPredictionInput>
  }

  export type FileUploadCreateWithoutErrorsInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedBy?: UserCreateNestedOneWithoutUploadedFilesInput
    reviews?: ReviewCreateNestedManyWithoutFileUploadInput
  }

  export type FileUploadUncheckedCreateWithoutErrorsInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    uploadedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutFileUploadInput
  }

  export type FileUploadCreateOrConnectWithoutErrorsInput = {
    where: FileUploadWhereUniqueInput
    create: XOR<FileUploadCreateWithoutErrorsInput, FileUploadUncheckedCreateWithoutErrorsInput>
  }

  export type FileUploadUpsertWithoutErrorsInput = {
    update: XOR<FileUploadUpdateWithoutErrorsInput, FileUploadUncheckedUpdateWithoutErrorsInput>
    create: XOR<FileUploadCreateWithoutErrorsInput, FileUploadUncheckedCreateWithoutErrorsInput>
    where?: FileUploadWhereInput
  }

  export type FileUploadUpdateToOneWithWhereWithoutErrorsInput = {
    where?: FileUploadWhereInput
    data: XOR<FileUploadUpdateWithoutErrorsInput, FileUploadUncheckedUpdateWithoutErrorsInput>
  }

  export type FileUploadUpdateWithoutErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneWithoutUploadedFilesNestedInput
    reviews?: ReviewUpdateManyWithoutFileUploadNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutFileUploadNestedInput
  }

  export type PredictionCreateWithoutHumanCorrectionsInput = {
    id?: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutPredictionInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUncheckedCreateWithoutHumanCorrectionsInput = {
    id?: string
    reviewId: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutPredictionInput
  }

  export type PredictionCreateOrConnectWithoutHumanCorrectionsInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutHumanCorrectionsInput, PredictionUncheckedCreateWithoutHumanCorrectionsInput>
  }

  export type UserCreateWithoutCorrectionsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewCreateNestedManyWithoutCreatedByInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCorrectionsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewUncheckedCreateNestedManyWithoutCreatedByInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpUncheckedCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCorrectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCorrectionsInput, UserUncheckedCreateWithoutCorrectionsInput>
  }

  export type PredictionUpsertWithoutHumanCorrectionsInput = {
    update: XOR<PredictionUpdateWithoutHumanCorrectionsInput, PredictionUncheckedUpdateWithoutHumanCorrectionsInput>
    create: XOR<PredictionCreateWithoutHumanCorrectionsInput, PredictionUncheckedCreateWithoutHumanCorrectionsInput>
    where?: PredictionWhereInput
  }

  export type PredictionUpdateToOneWithWhereWithoutHumanCorrectionsInput = {
    where?: PredictionWhereInput
    data: XOR<PredictionUpdateWithoutHumanCorrectionsInput, PredictionUncheckedUpdateWithoutHumanCorrectionsInput>
  }

  export type PredictionUpdateWithoutHumanCorrectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutPredictionNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateWithoutHumanCorrectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutPredictionNestedInput
  }

  export type UserUpsertWithoutCorrectionsInput = {
    update: XOR<UserUpdateWithoutCorrectionsInput, UserUncheckedUpdateWithoutCorrectionsInput>
    create: XOR<UserCreateWithoutCorrectionsInput, UserUncheckedCreateWithoutCorrectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCorrectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCorrectionsInput, UserUncheckedUpdateWithoutCorrectionsInput>
  }

  export type UserUpdateWithoutCorrectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUpdateManyWithoutCreatedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCorrectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUncheckedUpdateManyWithoutCreatedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PredictionCreateWithoutRecommendationFeedbackInput = {
    id?: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutPredictionInput
    humanCorrections?: HumanCorrectionCreateNestedManyWithoutPredictionInput
  }

  export type PredictionUncheckedCreateWithoutRecommendationFeedbackInput = {
    id?: string
    reviewId: string
    riskLabel: $Enums.RiskLabel
    probability: number
    sentiment: $Enums.SentimentLabel
    primaryCause: string
    secondaryCause?: string | null
    confidence: $Enums.ConfidenceLevel
    urgency: string
    recommendation: string
    explanation: string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    humanCorrections?: HumanCorrectionUncheckedCreateNestedManyWithoutPredictionInput
  }

  export type PredictionCreateOrConnectWithoutRecommendationFeedbackInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutRecommendationFeedbackInput, PredictionUncheckedCreateWithoutRecommendationFeedbackInput>
  }

  export type UserCreateWithoutRecommendationFeedbackInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionCreateNestedManyWithoutCorrectedByInput
    assignedFollowUps?: FollowUpCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecommendationFeedbackInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewUncheckedCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput
    assignedFollowUps?: FollowUpUncheckedCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecommendationFeedbackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecommendationFeedbackInput, UserUncheckedCreateWithoutRecommendationFeedbackInput>
  }

  export type PredictionUpsertWithoutRecommendationFeedbackInput = {
    update: XOR<PredictionUpdateWithoutRecommendationFeedbackInput, PredictionUncheckedUpdateWithoutRecommendationFeedbackInput>
    create: XOR<PredictionCreateWithoutRecommendationFeedbackInput, PredictionUncheckedCreateWithoutRecommendationFeedbackInput>
    where?: PredictionWhereInput
  }

  export type PredictionUpdateToOneWithWhereWithoutRecommendationFeedbackInput = {
    where?: PredictionWhereInput
    data: XOR<PredictionUpdateWithoutRecommendationFeedbackInput, PredictionUncheckedUpdateWithoutRecommendationFeedbackInput>
  }

  export type PredictionUpdateWithoutRecommendationFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutPredictionNestedInput
    humanCorrections?: HumanCorrectionUpdateManyWithoutPredictionNestedInput
  }

  export type PredictionUncheckedUpdateWithoutRecommendationFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    riskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    probability?: FloatFieldUpdateOperationsInput | number
    sentiment?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    primaryCause?: StringFieldUpdateOperationsInput | string
    secondaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: EnumConfidenceLevelFieldUpdateOperationsInput | $Enums.ConfidenceLevel
    urgency?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    detectedSignals?: NullableJsonNullValueInput | InputJsonValue
    warnings?: NullableJsonNullValueInput | InputJsonValue
    triggeredRules?: NullableJsonNullValueInput | InputJsonValue
    modelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    humanCorrections?: HumanCorrectionUncheckedUpdateManyWithoutPredictionNestedInput
  }

  export type UserUpsertWithoutRecommendationFeedbackInput = {
    update: XOR<UserUpdateWithoutRecommendationFeedbackInput, UserUncheckedUpdateWithoutRecommendationFeedbackInput>
    create: XOR<UserCreateWithoutRecommendationFeedbackInput, UserUncheckedCreateWithoutRecommendationFeedbackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecommendationFeedbackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecommendationFeedbackInput, UserUncheckedUpdateWithoutRecommendationFeedbackInput>
  }

  export type UserUpdateWithoutRecommendationFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUpdateManyWithoutCorrectedByNestedInput
    assignedFollowUps?: FollowUpUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecommendationFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUncheckedUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput
    assignedFollowUps?: FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClientCreateWithoutFollowUpsInput = {
    id?: string
    name: string
    externalRef?: string | null
    riskStatus?: $Enums.ClientRiskStatus
    accumulatedRiskScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutFollowUpsInput = {
    id?: string
    name: string
    externalRef?: string | null
    riskStatus?: $Enums.ClientRiskStatus
    accumulatedRiskScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutFollowUpsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutFollowUpsInput, ClientUncheckedCreateWithoutFollowUpsInput>
  }

  export type ReviewCreateWithoutFollowUpsInput = {
    id?: string
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutReviewsInput
    fileUpload?: FileUploadCreateNestedOneWithoutReviewsInput
    createdBy?: UserCreateNestedOneWithoutManualReviewsInput
    prediction?: PredictionCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutFollowUpsInput = {
    id?: string
    clientId: string
    fileUploadId?: string | null
    createdById?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    prediction?: PredictionUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutFollowUpsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutFollowUpsInput, ReviewUncheckedCreateWithoutFollowUpsInput>
  }

  export type UserCreateWithoutAssignedFollowUpsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutUserInput
    createdFollowUps?: FollowUpCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedFollowUpsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewUncheckedCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput
    createdFollowUps?: FollowUpUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedFollowUpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedFollowUpsInput, UserUncheckedCreateWithoutAssignedFollowUpsInput>
  }

  export type UserCreateWithoutCreatedFollowUpsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpCreateNestedManyWithoutAssignedToInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedFollowUpsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewUncheckedCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpUncheckedCreateNestedManyWithoutAssignedToInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedFollowUpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedFollowUpsInput, UserUncheckedCreateWithoutCreatedFollowUpsInput>
  }

  export type ClientUpsertWithoutFollowUpsInput = {
    update: XOR<ClientUpdateWithoutFollowUpsInput, ClientUncheckedUpdateWithoutFollowUpsInput>
    create: XOR<ClientCreateWithoutFollowUpsInput, ClientUncheckedCreateWithoutFollowUpsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutFollowUpsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutFollowUpsInput, ClientUncheckedUpdateWithoutFollowUpsInput>
  }

  export type ClientUpdateWithoutFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    riskStatus?: EnumClientRiskStatusFieldUpdateOperationsInput | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalRef?: NullableStringFieldUpdateOperationsInput | string | null
    riskStatus?: EnumClientRiskStatusFieldUpdateOperationsInput | $Enums.ClientRiskStatus
    accumulatedRiskScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ReviewUpsertWithoutFollowUpsInput = {
    update: XOR<ReviewUpdateWithoutFollowUpsInput, ReviewUncheckedUpdateWithoutFollowUpsInput>
    create: XOR<ReviewCreateWithoutFollowUpsInput, ReviewUncheckedCreateWithoutFollowUpsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutFollowUpsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutFollowUpsInput, ReviewUncheckedUpdateWithoutFollowUpsInput>
  }

  export type ReviewUpdateWithoutFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutReviewsNestedInput
    fileUpload?: FileUploadUpdateOneWithoutReviewsNestedInput
    createdBy?: UserUpdateOneWithoutManualReviewsNestedInput
    prediction?: PredictionUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    fileUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type UserUpsertWithoutAssignedFollowUpsInput = {
    update: XOR<UserUpdateWithoutAssignedFollowUpsInput, UserUncheckedUpdateWithoutAssignedFollowUpsInput>
    create: XOR<UserCreateWithoutAssignedFollowUpsInput, UserUncheckedCreateWithoutAssignedFollowUpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedFollowUpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedFollowUpsInput, UserUncheckedUpdateWithoutAssignedFollowUpsInput>
  }

  export type UserUpdateWithoutAssignedFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutUserNestedInput
    createdFollowUps?: FollowUpUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUncheckedUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput
    createdFollowUps?: FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutCreatedFollowUpsInput = {
    update: XOR<UserUpdateWithoutCreatedFollowUpsInput, UserUncheckedUpdateWithoutCreatedFollowUpsInput>
    create: XOR<UserCreateWithoutCreatedFollowUpsInput, UserUncheckedCreateWithoutCreatedFollowUpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedFollowUpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedFollowUpsInput, UserUncheckedUpdateWithoutCreatedFollowUpsInput>
  }

  export type UserUpdateWithoutCreatedFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUpdateManyWithoutAssignedToNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedFollowUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUncheckedUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    uploadedFiles?: FileUploadCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedFiles?: FileUploadUncheckedCreateNestedManyWithoutUploadedByInput
    manualReviews?: ReviewUncheckedCreateNestedManyWithoutCreatedByInput
    corrections?: HumanCorrectionUncheckedCreateNestedManyWithoutCorrectedByInput
    recommendationFeedback?: RecommendationFeedbackUncheckedCreateNestedManyWithoutUserInput
    assignedFollowUps?: FollowUpUncheckedCreateNestedManyWithoutAssignedToInput
    createdFollowUps?: FollowUpUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    uploadedFiles?: FileUploadUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUncheckedUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    name: string
    passwordHash?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedFiles?: FileUploadUncheckedUpdateManyWithoutUploadedByNestedInput
    manualReviews?: ReviewUncheckedUpdateManyWithoutCreatedByNestedInput
    corrections?: HumanCorrectionUncheckedUpdateManyWithoutCorrectedByNestedInput
    recommendationFeedback?: RecommendationFeedbackUncheckedUpdateManyWithoutUserNestedInput
    assignedFollowUps?: FollowUpUncheckedUpdateManyWithoutAssignedToNestedInput
    createdFollowUps?: FollowUpUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadCreateManyUploadedByInput = {
    id?: string
    originalFileName: string
    storedFileName?: string | null
    mimeType?: string | null
    status?: string
    totalRows?: number
    validRows?: number
    invalidRows?: number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyCreatedByInput = {
    id?: string
    clientId: string
    fileUploadId?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HumanCorrectionCreateManyCorrectedByInput = {
    id?: string
    predictionId: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationFeedbackCreateManyUserInput = {
    id?: string
    predictionId: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpCreateManyAssignedToInput = {
    id?: string
    clientId?: string | null
    reviewId?: string | null
    createdById?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpCreateManyCreatedByInput = {
    id?: string
    clientId?: string | null
    reviewId?: string | null
    assignedToId?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    roleName?: $Enums.RoleName | null
    action: string
    entityType: string
    entityId?: string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    createdAt?: Date | string
  }

  export type FileUploadUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutFileUploadNestedInput
    errors?: UploadErrorUpdateManyWithoutFileUploadNestedInput
  }

  export type FileUploadUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutFileUploadNestedInput
    errors?: UploadErrorUncheckedUpdateManyWithoutFileUploadNestedInput
  }

  export type FileUploadUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    storedFileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    validRows?: IntFieldUpdateOperationsInput | number
    invalidRows?: IntFieldUpdateOperationsInput | number
    warnings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutReviewsNestedInput
    fileUpload?: FileUploadUpdateOneWithoutReviewsNestedInput
    prediction?: PredictionUpdateOneWithoutReviewNestedInput
    followUps?: FollowUpUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    fileUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUncheckedUpdateOneWithoutReviewNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    fileUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanCorrectionUpdateWithoutCorrectedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUpdateOneRequiredWithoutHumanCorrectionsNestedInput
  }

  export type HumanCorrectionUncheckedUpdateWithoutCorrectedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictionId?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanCorrectionUncheckedUpdateManyWithoutCorrectedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictionId?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUpdateOneRequiredWithoutRecommendationFeedbackNestedInput
  }

  export type RecommendationFeedbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictionId?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictionId?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutFollowUpsNestedInput
    review?: ReviewUpdateOneWithoutFollowUpsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedFollowUpsNestedInput
  }

  export type FollowUpUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutFollowUpsNestedInput
    review?: ReviewUpdateOneWithoutFollowUpsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedFollowUpsNestedInput
  }

  export type FollowUpUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleName?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleName?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleName?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    previousValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyClientInput = {
    id?: string
    fileUploadId?: string | null
    createdById?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpCreateManyClientInput = {
    id?: string
    reviewId?: string | null
    assignedToId?: string | null
    createdById?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUpload?: FileUploadUpdateOneWithoutReviewsNestedInput
    createdBy?: UserUpdateOneWithoutManualReviewsNestedInput
    prediction?: PredictionUpdateOneWithoutReviewNestedInput
    followUps?: FollowUpUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUncheckedUpdateOneWithoutReviewNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUploadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneWithoutFollowUpsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedFollowUpsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedFollowUpsNestedInput
  }

  export type FollowUpUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyFileUploadInput = {
    id?: string
    clientId: string
    createdById?: string | null
    sourceRecordId?: string | null
    reviewDate: Date | string
    year?: number | null
    quarter?: string | null
    month?: string | null
    source?: string | null
    comment: string
    originalSentiment?: string | null
    category: string
    subcategory: string
    product?: string | null
    detail?: string | null
    originalClassification: string
    npsScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadErrorCreateManyFileUploadInput = {
    id?: string
    rowNumber: number
    sourceRecordId?: string | null
    reason: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutFileUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutReviewsNestedInput
    createdBy?: UserUpdateOneWithoutManualReviewsNestedInput
    prediction?: PredictionUpdateOneWithoutReviewNestedInput
    followUps?: FollowUpUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutFileUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prediction?: PredictionUncheckedUpdateOneWithoutReviewNestedInput
    followUps?: FollowUpUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutFileUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    month?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: StringFieldUpdateOperationsInput | string
    originalSentiment?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    product?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    originalClassification?: StringFieldUpdateOperationsInput | string
    npsScore?: NullableIntFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadErrorUpdateWithoutFileUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadErrorUncheckedUpdateWithoutFileUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadErrorUncheckedUpdateManyWithoutFileUploadInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    sourceRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpCreateManyReviewInput = {
    id?: string
    clientId?: string | null
    assignedToId?: string | null
    createdById?: string | null
    status?: $Enums.FollowUpStatus
    contactDate?: Date | string | null
    actionTaken?: string | null
    escalatedArea?: string | null
    contactResult?: string | null
    note?: string | null
    closingNote?: string | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowUpUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutFollowUpsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedFollowUpsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedFollowUpsNestedInput
  }

  export type FollowUpUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFollowUpStatusFieldUpdateOperationsInput | $Enums.FollowUpStatus
    contactDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    escalatedArea?: NullableStringFieldUpdateOperationsInput | string | null
    contactResult?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    closingNote?: NullableStringFieldUpdateOperationsInput | string | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanCorrectionCreateManyPredictionInput = {
    id?: string
    correctedById: string
    originalRiskLabel: $Enums.RiskLabel
    correctedRiskLabel: $Enums.RiskLabel
    originalSentiment?: $Enums.SentimentLabel | null
    correctedSentiment?: $Enums.SentimentLabel | null
    originalPrimaryCause?: string | null
    correctedPrimaryCause?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationFeedbackCreateManyPredictionInput = {
    id?: string
    userId: string
    isUseful: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HumanCorrectionUpdateWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    correctedBy?: UserUpdateOneRequiredWithoutCorrectionsNestedInput
  }

  export type HumanCorrectionUncheckedUpdateWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    correctedById?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanCorrectionUncheckedUpdateManyWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    correctedById?: StringFieldUpdateOperationsInput | string
    originalRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    correctedRiskLabel?: EnumRiskLabelFieldUpdateOperationsInput | $Enums.RiskLabel
    originalSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    correctedSentiment?: NullableEnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel | null
    originalPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    correctedPrimaryCause?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackUpdateWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecommendationFeedbackNestedInput
  }

  export type RecommendationFeedbackUncheckedUpdateWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackUncheckedUpdateManyWithoutPredictionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUseful?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}