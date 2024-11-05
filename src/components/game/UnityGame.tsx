// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"

import { useEffect } from "react"

export const UnityGame = () => {
  useEffect(() => {
    const canvas = document.querySelector("#unity-canvas")
    function unityShowBanner(msg, type) {
      const warningBanner = document.querySelector("#unity-warning")
      function updateBannerVisibility() {
        warningBanner.style.display = warningBanner.children.length
          ? "block"
          : "none"
      }
      const div = document.createElement("div")
      div.innerHTML = msg
      warningBanner.appendChild(div)
      if (type == "error") div.style = "background: red; padding: 10px;"
      else {
        if (type == "warning") div.style = "background: yellow; padding: 10px;"
        setTimeout(function () {
          warningBanner.removeChild(div)
          updateBannerVisibility()
        }, 5000)
      }
      updateBannerVisibility()
    }

    const buildUrl = "Build"
    const loaderUrl = buildUrl + "/WithoutCompress.loader.js"
    const config = {
      arguments: [],
      dataUrl: buildUrl + "/WithoutCompress.data",
      frameworkUrl: buildUrl + "/WithoutCompress.framework.js",
      codeUrl: buildUrl + "/WithoutCompress.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "FriendshipCamp",
      productVersion: "1.0.0",
      showBanner: unityShowBanner,
    }

    // By default, Unity keeps WebGL canvas render target size matched with
    // the DOM size of the canvas element (scaled by window.devicePixelRatio)
    // Set this to false if you want to decouple this synchronization from
    // happening inside the engine, and you would instead like to size up
    // the canvas DOM size and WebGL render target sizes yourself.
    // config.matchWebGLToCanvasSize = false;

    // If you would like all file writes inside Unity Application.persistentDataPath
    // directory to automatically persist so that the contents are remembered when
    // the user revisits the site the next time, uncomment the following line:
    // config.autoSyncPersistentDataPath = true;
    // This autosyncing is currently not the default behavior to avoid regressing
    // existing user projects that might rely on the earlier manual
    // JS_FileSystem_Sync() behavior, but in future Unity version, this will be
    // expected to change.

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Mobile device style: fill the whole browser client area with the game canvas:

      const meta = document.createElement("meta")
      meta.name = "viewport"
      meta.content =
        "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes"
      document.getElementsByTagName("head")[0].appendChild(meta)
      document.querySelector("#unity-container").className = "unity-mobile"
      canvas.className = "unity-mobile"

      // To lower canvas resolution on mobile devices to gain some
      // performance, uncomment the following line:
      // config.devicePixelRatio = 1;
    } else {
      // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:
      canvas.style.width = "1280px"
      canvas.style.height = "720px"
    }

    document.querySelector("#unity-loading-bar").style.display = "block"

    const script = document.createElement("script")
    script.src = loaderUrl
    script.onload = () => {
      createUnityInstance(canvas, config, (progress) => {
        document.querySelector("#unity-progress-bar-full").style.width =
          100 * progress + "%"
      })
        .then((unityInstance) => {
          document.querySelector("#unity-loading-bar").style.display = "none"
          document.querySelector("#unity-fullscreen-button").onclick = () => {
            unityInstance.SetFullscreen(1)
          }
        })
        .catch((message) => {
          alert(message)
        })
    }

    document.body.appendChild(script)
  }, [])

  return (
    <div id="unity-container" className="unity-desktop">
      <canvas
        id="unity-canvas"
        width="1280"
        height="720"
        tabIndex={-1}
      ></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-warning"></div>
      <div id="unity-footer">
        <div id="unity-logo-title-footer"></div>
        <div id="unity-fullscreen-button"></div>
        <div id="unity-build-title">FriendshipCamp</div>
      </div>
    </div>
  )
}