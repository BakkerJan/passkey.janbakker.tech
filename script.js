const data = {
  deviceBound: [
    {
      name: "Microsoft Authenticator App",
      href: "pages/microsoft-authenticator-app.html",
      logos: [
        {
          src: "assets/logos/microsoft-authenticator.png",
          alt: "Microsoft Authenticator app logo"
        }
      ]
    },
    {
      name: "FIDO2 Hardware Device",
      href: "pages/fido2-hardware-key.html",
      logos: [
        {
          src: "assets/logos/fido-key.png",
          alt: "FIDO hardware security key"
        }
      ]
    },
    {
      name: "Edge and Chrome on macOS",
      href: "pages/edge-chrome-macos.html",
      logoLayout: "appleTop",
      logos: [
        {
          src: "assets/logos/apple-logo.svg",
          alt: "Apple logo"
        },
        {
          src: "assets/logos/edge-on-mac.svg",
          alt: "Microsoft Edge logo"
        },
        {
          src: "assets/logos/chrome-on-mac.svg",
          alt: "Google Chrome logo"
        }
      ]
    },
    {
      name: "Windows Hello",
      href: "pages/windows-hello.html",
      logos: [
        {
          src: "assets/logos/windows-hello.svg",
          alt: "Windows logo"
        }
      ]
    }
  ],
  autoRegistered: [
    {
      name: "Windows Hello for Business",
      href: "pages/windows-hello-for-business.html",
      logos: [
        {
          src: "assets/logos/windows-hello-business.png",
          alt: "Windows Hello for Business logo"
        }
      ]
    },
    {
      name: "Platform Credential for macOS",
      href: "pages/platform-credential-macos.html",
      logos: [
        {
          src: "assets/logos/icloud-keychain-managed.svg",
          alt: "iCloud Keychain Managed logo"
        }
      ]
    }
  ],
  nativeSynced: [
    {
      name: "Apple Passwords",
      href: "pages/apple-passwords.html",
      logos: [
        {
          src: "assets/logos/apple-passwords.svg",
          alt: "Apple Passwords logo"
        }
      ]
    },
    {
      name: "Google Password Manager",
      href: "pages/google-password-manager.html",
      logos: [
        {
          src: "assets/logos/google-password-manager.svg",
          alt: "Google logo"
        }
      ]
    },
    {
      name: "Windows Password Manager",
      href: "pages/windows-password-manager.html",
      logos: [
        {
          src: "assets/logos/microsoft-password-manager.svg",
          alt: "Microsoft Password Manager logo"
        }
      ]
    }
  ],
  commercialSynced: [
    {
      name: "Commercial Passkey Managers",
      href: "pages/commercial-passkey-managers.html",
      logos: [
        {
          src: "assets/logos/dashlane.svg",
          alt: "Dashlane logo"
        },
        {
          src: "assets/logos/keeper.svg",
          alt: "Keeper logo"
        },
        {
          src: "assets/logos/nordpass.svg",
          alt: "NordPass logo"
        },
        {
          src: "assets/logos/1password.svg",
          alt: "1Password logo"
        },
        {
          src: "assets/logos/bitwarden.svg",
          alt: "Bitwarden logo"
        }
      ]
    }
  ],
  tools: [
    {
      name: "Registration Campaign Nudger",
      href: "pages/entra-registration-campaign-sim.html",
      logos: [
        {
          src: "assets/logos/janbakkertech-logo.png",
          alt: "JanBakker.tech logo"
        }
      ]
    }
  ]
};

function buildCards(targetId, items) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  function renderLogos(item) {
    if (item.logoLayout === "appleTop" && item.logos.length >= 3) {
      const top = item.logos[0];
      const bottom = item.logos.slice(1);

      return `
        <div class="card-logo-stack" aria-hidden="true">
          <div class="card-logo-row top-row">
            <span class="logo-chip logo-chip-top"><img class="logo-img" src="${top.src}" alt="${top.alt}"></span>
          </div>
          <div class="card-logo-row bottom-row">
            ${bottom
              .map(
                (logo) => `<span class="logo-chip"><img class="logo-img" src="${logo.src}" alt="${logo.alt}"></span>`
              )
              .join("")}
          </div>
        </div>
      `;
    }

    return `
      <div class="card-logo-row" aria-hidden="true">
        ${item.logos
          .map(
            (logo) => `<span class="logo-chip"><img class="logo-img" src="${logo.src}" alt="${logo.alt}"></span>`
          )
          .join("")}
      </div>
    `;
  }

  target.innerHTML = items
    .map(
      (item) => `
        <a class="card-link" href="${item.href}">
          ${renderLogos(item)}
          <h4>${item.name}</h4>
        </a>
      `
    )
    .join("");
}

buildCards("device-bound-grid", data.deviceBound);
buildCards("auto-registered-grid", data.autoRegistered);
buildCards("native-synced-grid", data.nativeSynced);
buildCards("commercial-synced-grid", data.commercialSynced);
buildCards("tools-grid", data.tools);
