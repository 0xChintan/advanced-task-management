"use client";

import { PageHeader } from "@/components/page-header";
import { SettingsForm } from "@/components/settings/settings-form";

export default function SettingsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Settings"
        description="Manage your preferences and account settings"
      />
      <SettingsForm />
    </div>
  );
}