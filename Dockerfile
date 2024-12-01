FROM liferay/portal

WORKDIR /opt/liferay/osgi/client-extensions

COPY ./client-extensions/liferay-clientextension-react/dist/liferay-clientextension-react.zip ./
