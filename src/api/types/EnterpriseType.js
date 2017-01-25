// @flow

import typeof EnterpriseCategoryType from "./EnterpriseCategoryType";
import typeof EntrepreneurType from "./EntrepreneurType";
import typeof CaenType from "./CaenType";
import typeof SocialInterventionDomainType from "./SocialInterventionDomainType";

export type EnterpriseType = {
  id: number,
  name: string,
  number: string,
  contactName: string,
  enterpriseCategory: EnterpriseCategoryType,
  entrepreneur: EntrepreneurType,
  foundedAt: string,
  primaryCaen: CaenType,
  secondaryCaens: Array<string>,
  socialInterventionDomain: SocialInterventionDomainType,
  taxRegistrationCode: string,
}

