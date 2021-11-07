// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    builderCouncil: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    builderCouncilMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    builderTreasury: {
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    entity: {
      /**
       * The registrar has already been revoked.
       **/
      AccountAlreadyRevoked: AugmentedError<ApiType>;
      /**
       * current status matches proposed change
       **/
      NoChangeRequired: AugmentedError<ApiType>;
      /**
       * Only when the revoker is permitted.
       **/
      UnauthorizedRevocation: AugmentedError<ApiType>;
      /**
       * There is no registrar with the given ID.
       **/
      VerifierAccountNotFound: AugmentedError<ApiType>;
      /**
       * registrar account revoked
       **/
      VerifierAccountRevoked: AugmentedError<ApiType>;
      /**
       * The registrar already exists.
       **/
      VerifierAlreadyExists: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    generalCouncil: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    schema: {
      /**
       * CID already anchored
       **/
      CidAlreadyAnchored: AugmentedError<ApiType>;
      HashAlreadyAnchored: AugmentedError<ApiType>;
      /**
       * Invalid CID encoding.
       **/
      InvalidCidEncoding: AugmentedError<ApiType>;
      /**
       * Invalid CID version
       **/
      InvalidCidVersion: AugmentedError<ApiType>;
      /**
       * Invalid request
       **/
      InvalidRequest: AugmentedError<ApiType>;
      NoPermissionChangeRequired: AugmentedError<ApiType>;
      /**
       * Hash and Identifier are the same
       **/
      SameIdentifierAndHash: AugmentedError<ApiType>;
      /**
       * Schema idenfier is not unique
       **/
      SchemaAlreadyAnchored: AugmentedError<ApiType>;
      /**
       * Schema delegate not found
       **/
      SchemaDelegateNotFound: AugmentedError<ApiType>;
      /**
       * Schema idenfier not found
       **/
      SchemaNotFound: AugmentedError<ApiType>;
      SchemaNotPermissioned: AugmentedError<ApiType>;
      /**
       * Schema revoked
       **/
      SchemaRevoked: AugmentedError<ApiType>;
      /**
       * no status change required
       **/
      StatusChangeNotRequired: AugmentedError<ApiType>;
      TooManyDelegates: AugmentedError<ApiType>;
      /**
       * Only when the author is not the controller/delegate.
       **/
      UnauthorizedOperation: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    stream: {
      /**
       * Invalid CID encoding.
       * CID already anchored
       **/
      CidAlreadyAnchored: AugmentedError<ApiType>;
      /**
       * Invalid request
       **/
      InvalidRequest: AugmentedError<ApiType>;
      /**
       * Hash and Identifier are the same
       **/
      SameIdentifierAndHash: AugmentedError<ApiType>;
      /**
       * No stream status change required
       **/
      StatusChangeNotRequired: AugmentedError<ApiType>;
      /**
       * Stream idenfier is not unique
       **/
      StreamAlreadyAnchored: AugmentedError<ApiType>;
      /**
       * Stream link does not exist
       **/
      StreamLinkNotFound: AugmentedError<ApiType>;
      /**
       * Stream Link is revoked
       **/
      StreamLinkRevoked: AugmentedError<ApiType>;
      /**
       * Stream idenfier not found
       **/
      StreamNotFound: AugmentedError<ApiType>;
      /**
       * Stream idenfier marked inactive
       **/
      StreamRevoked: AugmentedError<ApiType>;
      /**
       * Only when the author is not the controller/delegate.
       **/
      UnauthorizedOperation: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCouncil: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCouncilMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
    [key: string]: ModuleErrors<ApiType>;
  }
}
