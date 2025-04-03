---
title: File Locations
---

On Windows, the latest Engram versions store your Engram files in your **appdata** folder. You can access it by opening the file manager, and typing `%APPDATA%\com.engram.main` in the location field.

On MacOS, the latest Engram store all their files in the `~/Library/Application Support/com.engram.main` folder. The Library folder is hidden by default, but can be revealed in Finder by holding down the option key while clicking on the Go menu (or Cmd+G).

Your Engram collection is stored inside of a SQLite Database within the `/db` folder.

:::danger
You should **never** copy or move your collection while Engram is open. Doing so could cause your collection to become corrupt. Please do not move or modify the other files in the folder either.
:::