---
title: "Build a Free Oracle Cloud Remote Workstation: 4 OCPU + 24 GB RAM"
description: "A practical guide to creating an ARM64 Oracle Cloud workstation within the applicable Always Free A1 allowance on a PAYG tenancy."
pubDate: "2026-09-12"
heroImage: "/images/oracle-cloud-remote-workstation.png"
tags: ["cloud", "oracle-cloud", "linux", "remote-workstation", "devops"]
---

If you want a capable remote Linux workstation without a monthly server bill, Oracle Cloud's Ampere A1 offering is an interesting option. With the right tenancy and resource choices, a continuously running ARM64 machine with **4 OCPU and 24 GB RAM** can fit within the applicable Always Free allowance.

This guide walks through the account decision, instance setup, security basics, and the guardrails that help keep costs at zero.

> [!IMPORTANT]
> Cloud allowances, available shapes, regions, and verification policies can change. Check Oracle's current pricing and Always Free documentation before creating resources, and create a budget alert before provisioning anything.

## What we're building

| Configuration | Value |
| --- | --- |
| Instance shape | `VM.Standard.A1.Flex` |
| Architecture | ARM64 / aarch64 |
| Compute | 4 OCPU |
| Memory | 24 GB |
| Operating system | Ubuntu Minimal aarch64 |
| Boot volume | 100 GB |
| Network access | Public IPv4 with SSH |
| Billing model | Pay As You Go (PAYG) tenancy |

The important distinction is that a PAYG tenancy is not automatically a paid VM. It can still use Always Free resources; charges begin only when usage goes outside the allowance or uses billable services.

## Why PAYG matters

The standard unpaid Free Tier may not expose enough A1 capacity for this configuration. On a PAYG tenancy, the applicable Ampere A1 allowance can be up to **3,000 OCPU-hours** and **18,000 GB-hours** per month.

For a typical 31-day month, a single always-on 4 OCPU / 24 GB instance uses:

```text
CPU: 4 OCPU × 24 hours × 31 days = 2,976 OCPU-hours
RAM: 24 GB × 24 hours × 31 days = 17,856 GB-hours
```

That is within those limits, provided no other A1 machines consume the same allowance. Shorter months leave more room; other running instances, additional services, or changed pricing can change the result.

> [!NOTE]
> Capacity is separate from allowance. Even with a qualifying configuration, an availability domain may have no A1 capacity at the moment you try to create the VM.

## Create and upgrade the account

Start by creating an Oracle Cloud Free Tier account and choosing a home region carefully. Your resources remain tied to that home region, so select one you expect to use long term.

To use the larger PAYG tenancy allowance, complete the **Upgrade to Pay As You Go** process in the billing area. Use the payment card's real billing details—especially the exact billing address held by your bank. Oracle may perform a temporary authorization during signup or the upgrade; confirm the current amount and reversal policy in Oracle's documentation and with your bank.

Wait for the console to show that the tenancy is fully upgraded before creating the A1 instance.

```text
Free Tier account
      ↓
PAYG upgrade submitted
      ↓
PAYG status active
      ↓
Create the A1 workstation
```

## Provision the Ampere A1 instance

In the Oracle Cloud Console, open **Compute → Instances → Create instance**. Use these settings as the baseline:

```text
Name:          oracle-remote-workstation
Image:         Ubuntu Minimal aarch64
Shape:         VM.Standard.A1.Flex
OCPU:          4
Memory:        24 GB
Boot volume:   100 GB
Public IPv4:   Enabled
```

The A1 shape is ARM-based, so choose an `aarch64` image and make sure any development tools, Docker images, or binaries you plan to use support ARM64.

For networking, create or select an appropriate VCN and subnet, then assign a public IPv4 address only if you need direct remote access. Keep inbound firewall rules narrow: for a personal SSH workstation, allow TCP port 22 only from your own trusted IP range whenever possible.

### Handling capacity errors

An error about unavailable A1 capacity does not mean your account setup is wrong. Availability varies by region and availability domain.

Try a different availability domain, a smaller initial shape, or another time. Do not repeatedly submit the same request without changing anything; it will not create capacity.

## Protect SSH access

During provisioning, either upload an existing public key or have Oracle generate an SSH key pair. Download a generated private key immediately and store it securely.

```text
Private key  → keep secret; never commit, share, or publish it
Public key   → installed on the server for authentication
```

After first login, use a non-root user, keep packages current, and consider disabling password authentication once key-based access is working. Do not place real IP addresses, account IDs, OCIDs, email addresses, or private-key filenames in screenshots or public documentation.

## Connect and finish the workstation setup

Once the instance reaches the Running state, connect with the public IP and the private key you saved:

```bash
ssh -i your-ssh-key.key ubuntu@YOUR_PUBLIC_IP
```

The exact default username depends on the selected image, so follow the image-specific connection instructions displayed by Oracle. From there you can install your editor, language runtimes, containers, or a remote-development tool that supports ARM64.

> [!TIP]
> Before installing a large toolchain, run `uname -m`. It should report `aarch64` on this instance. Prefer ARM64 packages and container images to avoid emulation overhead.

## Add a budget alert before you forget

Even when you intend to remain inside Always Free, create a small monthly budget alert—for example, **$1**—in **Billing & Cost Management → Budgets**. Configure notifications for actual spend and send them to an email address you monitor.

> [!WARNING]
> A budget alert is a notification, not a hard spending cap. It does not automatically stop a VM or prevent further usage.

Review the Cost Analysis and resource lists periodically. The usual surprises are additional paid compute, block storage beyond the allowance, public IP or networking resources, backups, or another A1 instance consuming the monthly pool.

## Stop it when you don't need it

To stop the compute instance, open **Compute → Instances**, choose the machine, and use **Actions → Stop**. Stopping compute can be useful for an occasional workstation, but it does not automatically make every attached resource free. Review the resources that remain—especially storage and reserved networking—and consult the current pricing for their eligibility.

## Final checklist

- [ ] Free Tier account created and home region selected
- [ ] PAYG upgrade completed and active
- [ ] Billing details match the payment card records
- [ ] `VM.Standard.A1.Flex` configured with 4 OCPU and 24 GB RAM
- [ ] ARM64/aarch64 Ubuntu image selected
- [ ] 100 GB boot volume reviewed for allowance eligibility
- [ ] Public access limited to what is needed
- [ ] SSH private key stored securely and never committed
- [ ] Budget alert and spend notifications enabled
- [ ] Total A1 usage checked before adding another instance

The main lesson is that **PAYG and free usage are not opposites**. A PAYG tenancy opens access to paid services while still allowing qualifying Always Free resources. By tracking the hourly compute and memory totals, securing access, and setting an early budget alert, this A1 configuration can be a very capable remote Linux workstation without an ongoing bill.
