import { Plugin } from "@types";
import { useProxy } from "@lib/storage";
import { plugins } from "@lib/plugins";
import settings from "@lib/settings";
import AddonPage from "@ui/settings/components/AddonPage";
import PluginCard from "@ui/settings/components/PluginCard";

export default function Plugins() {
    useProxy(settings)

    return (
        <AddonPage<Plugin>
            items={plugins}
            safeModeMessage="You are currently in recovery mode! Disable any plugings that you think are misbehaving and disable recovery mode."
            card={PluginCard}
        />
    )
}
