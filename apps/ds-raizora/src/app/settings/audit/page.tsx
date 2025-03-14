"use client"

import { Divider } from "@packages/ui/components/base/divider"
import Approvers from "@/modules/core/settings/components/approvers"
import AuditRules from "@/modules/core/settings/components/audit-rules"
import TransactionPolicy from "@/modules/core/settings/components/transaction-policy"

export default function Audit() {
  return (
    <div>
      <AuditRules />
      <Divider className="my-10" />
      <Approvers />
      <Divider className="my-10" />
      <TransactionPolicy />
    </div>
  )
}
